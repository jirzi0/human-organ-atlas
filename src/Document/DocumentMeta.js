import React from 'react';

import { Box, Card, Heading, Link, Text } from '../Primitives';
import MetaItem from './MetaItem';

function DocumentMeta(props) {
  const { documentId, instrument, parameters } = props;
  const {
    doi,
    startDate,
    samplePatient,
    sample,
    tomo,
    instrumentSource,
    instrumentAttenuator01,
    instrumentDetector01,
    scanType,
  } = parameters;

  return (
    <>
      <Box>
        <Card px={[3, 3, 3, 4]} py={[3, 3, 3, 4]}>
          <Heading variant="boldHeading" mb={[1, 1, 2]}>
            Description
          </Heading>
          <Text as="p" color="textVivid">
            {doi.abstract}
          </Text>
        </Card>
        <Box as="ul" bg="middleground" color="inherit" pl={0}>
          <MetaItem label="DOI">
            <Link variant="doi" href={`http://doi.org/${documentId}`} blank>
              <Text as="span">DOI</Text>
              <Text as="span">{documentId}</Text>
            </Link>
          </MetaItem>
          <MetaItem label="Users">{doi.users}</MetaItem>
          <MetaItem label="Technique">{tomo.technique}</MetaItem>
          <MetaItem label="Instrument">
            {instrument.name}, {instrument.facility}
          </MetaItem>
        </Box>
      </Box>
      <Box>
        <Card px={[3, 3, 3, 4]} py={[3]}>
          <Heading variant="boldHeading" mb={[0, 0]}>
            Patient
          </Heading>
        </Card>
        <Box as="ul" bg="middleground" color="inherit" pl={0}>
          <MetaItem label="Institute">{samplePatient.institute}</MetaItem>
          <MetaItem label="Number">{samplePatient.number}</MetaItem>
          <MetaItem label="Age">{samplePatient.age} yo</MetaItem>
          <MetaItem label="Sex">{samplePatient.sex}</MetaItem>
          <MetaItem label="Weight">
            {samplePatient.weight ? `${samplePatient.weight} kg` : 'unknown'}
          </MetaItem>
          <MetaItem label="Size">
            {samplePatient.size > 0 ? `${samplePatient.size} cm` : 'unknown'}
          </MetaItem>
          <MetaItem label="Medical info">{samplePatient.info}</MetaItem>
        </Box>
      </Box>
      <Box>
        <Card px={[3, 3, 3, 4]} py={[3]}>
          <Heading variant="boldHeading" mb={[0, 0]}>
            Sample
          </Heading>
        </Card>
        <Box as="ul" bg="middleground" color="inherit" pl={0}>
          <MetaItem label="Name">{sample.name}</MetaItem>
          <MetaItem label="Info">{sample.description}</MetaItem>
          <MetaItem label="Preparation">
            {sample.preparationDescription}
          </MetaItem>
        </Box>
      </Box>
      <Box>
        <Card px={[3, 3, 3, 4]} py={[3]}>
          <Heading variant="boldHeading" mb={[0, 0]}>
            Scan parameters
          </Heading>
        </Card>
        <Box as="ul" bg="middleground" color="inherit" pl={0}>
          <MetaItem wide label="Start date">
            {startDate}
          </MetaItem>
          <MetaItem wide label="SR current">
            {instrumentSource.current} mA
          </MetaItem>
          <MetaItem wide label="ID names">
            {tomo.idNames}
          </MetaItem>
          <MetaItem wide label="Scan radix">
            {tomo.scanRadix}
          </MetaItem>
          <MetaItem wide label="X step">
            {tomo.xStep || 'N.A.'}
          </MetaItem>
          <MetaItem wide label="X stages">
            {tomo.xStages}
          </MetaItem>
          <MetaItem wide label="Y step">
            {tomo.yStep || 'N.A.'}
          </MetaItem>
          <MetaItem wide label="Y stages">
            {tomo.yStages}
          </MetaItem>
          <MetaItem wide label="Z step">
            {tomo.zStep}
          </MetaItem>
          <MetaItem wide label="Z stages">
            {tomo.zStages}
          </MetaItem>
          <MetaItem wide label="Projections">
            {tomo.projN}
          </MetaItem>
          <MetaItem wide label="Ref N">
            {tomo.refN || 'N.A.'}
          </MetaItem>
          <MetaItem wide label="Dark N">
            {tomo.darkN}
          </MetaItem>
          <MetaItem wide label="Ref on">
            {tomo.refOn || 'N.A.'}
          </MetaItem>
          <MetaItem wide label="Scanning mode">
            {scanType}
          </MetaItem>
          <MetaItem wide label="Exposure time">
            {tomo.exposureTime}
          </MetaItem>
          <MetaItem wide label="Acc. exposure time">
            {tomo.accExposureTime}
          </MetaItem>
          <MetaItem wide label="Acc. frames count">
            {tomo.accFramesCount}
          </MetaItem>
          <MetaItem wide label="Pixel size">
            {tomo.pixelSize}
          </MetaItem>
          <MetaItem wide label="Prop. distance">
            {tomo.detectorDistance}
          </MetaItem>
          <MetaItem wide label="Filters">
            {instrumentAttenuator01.description}
          </MetaItem>
          <MetaItem wide label="Detector avg. energy">
            {tomo.energy}
          </MetaItem>
          <MetaItem wide label="Scan geometry">
            {tomo.halfAcquisition}
          </MetaItem>
          <MetaItem wide label="Scan range">
            {tomo.scanRange}
          </MetaItem>
          <MetaItem wide label="Sensor name">
            {instrumentDetector01.description}
          </MetaItem>
          <MetaItem wide label="Sensor mode">
            {instrumentDetector01.acquisitionMode}
          </MetaItem>
          <MetaItem wide label="Sensor pixel size">
            {tomo.ccdPixelSize}
          </MetaItem>
          <MetaItem wide label="Magnification">
            {tomo.magnification}
          </MetaItem>
          <MetaItem wide label="X pixel num.">
            {tomo.xPixelN}
          </MetaItem>
          <MetaItem wide label="Y pixel num.">
            {tomo.yPixelN}
          </MetaItem>
          <MetaItem wide label="Optics type">
            {tomo.opticsType}
          </MetaItem>
          <MetaItem wide label="Scintillator">
            {tomo.scintillator}
          </MetaItem>
          <MetaItem wide label="Surface dose rate">
            {tomo.surfaceDose}
          </MetaItem>
          <MetaItem wide label="VOI dose rate">
            {tomo.voiDose}
          </MetaItem>
          <MetaItem wide label="VOI integ. dose">
            {tomo.totalVoiDose}
          </MetaItem>
          <MetaItem wide label="Scan time">
            {tomo.scanTime}
          </MetaItem>
          <MetaItem wide label="Series time">
            {tomo.seriesTime}
          </MetaItem>
        </Box>
      </Box>
      <Box>
        <Card px={[3, 3, 3, 4]} py={[3]}>
          <Heading variant="boldHeading" mb={[0, 0]}>
            Processing
          </Heading>
        </Card>
        <Box as="ul" bg="middleground" color="inherit" pl={0}>
          <MetaItem wide label="Ref. approach">
            {tomo.referenceDescription}
          </MetaItem>
          <MetaItem wide label="Volume X">
            {tomo.xVolume}
          </MetaItem>
          <MetaItem wide label="Volume Y">
            {tomo.yVolume}
          </MetaItem>
          <MetaItem wide label="Volume Z">
            {tomo.zVolume}
          </MetaItem>
          <MetaItem wide label="32 to 16 bits min.">
            {tomo.min32To16Bits}
          </MetaItem>
          <MetaItem wide label="32 to 16 bits max.">
            {tomo.max32To16Bits}
          </MetaItem>
          <MetaItem wide label="JP2 compr. ratio">
            {tomo.jp2CompressRatio}
          </MetaItem>
        </Box>
      </Box>
    </>
  );
}

export default DocumentMeta;
