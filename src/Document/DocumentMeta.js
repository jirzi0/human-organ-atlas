import React from 'react';

import { Box, Card, Heading, Link, Text } from '../Primitives';
import MetaItem from './MetaItem';

function DocumentMeta(props) {
  const { doi, description, sample, patient, scan } = props;

  return (
    <>
      <Box>
        <Card px={[3, 3, 3, 4]} py={[3, 3, 3, 4]}>
          <Heading variant="boldHeading" mb={[1, 1, 2]}>
            Description
          </Heading>
          <Text as="p" color="textVivid">
            {description}
          </Text>
        </Card>
        <Box as="ul" bg="middleground" color="inherit" pl={0}>
          <MetaItem label="Citation">
            <Link variant="doi" href={`http://doi.org/${doi}`} blank>
              <Text as="span">DOI</Text>
              <Text as="span">{doi.slice(4)}</Text>
            </Link>
          </MetaItem>
          <MetaItem label="Instrument">{scan.idNames}</MetaItem>
          <MetaItem label="Technique">{scan.technique}</MetaItem>
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
          <MetaItem label="Description">{sample.description}</MetaItem>
          <MetaItem label="Preparation">
            {sample.preparationDescription}
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
          <MetaItem label="Number">{patient.number}</MetaItem>
          <MetaItem label="Origin">{patient.institute}</MetaItem>
          <MetaItem label="Size">{patient.size} cm</MetaItem>
          <MetaItem label="Weight">{patient.weight} kg</MetaItem>
          <MetaItem label="Info">{patient.info}</MetaItem>
        </Box>
      </Box>
      <Box>
        <Card px={[3, 3, 3, 4]} py={[3]}>
          <Heading variant="boldHeading" mb={[0, 0]}>
            Scan
          </Heading>
        </Card>
        <Box as="ul" bg="middleground" color="inherit" pl={0}>
          <MetaItem wide label="Detector">
            {scan.detectorDescription}
          </MetaItem>
          <MetaItem wide label="Detector distance">
            {scan.detectorDistance}
          </MetaItem>
          <MetaItem wide label="Acquisition mode">
            {scan.acquisitionMode}
          </MetaItem>
          <MetaItem wide label="Current">
            {scan.current}
          </MetaItem>
          <MetaItem wide label="Energy">
            {scan.energy}
          </MetaItem>
          <MetaItem wide label="Exposure time">
            {scan.exposureTime}
          </MetaItem>
          <MetaItem wide label="Acc. exposure time">
            {scan.accExposureTime}
          </MetaItem>
          <MetaItem wide label="Acc. frames count">
            {scan.accFramesCount}
          </MetaItem>
          <MetaItem wide label="Dark n">
            {scan.darkN}
          </MetaItem>
          <MetaItem wide label="Half acquisition">
            {scan.halfAcquisition}
          </MetaItem>
          <MetaItem wide label="JP2 compression ratio">
            {scan.jp2CompressRatio}
          </MetaItem>
          <MetaItem wide label="Magnification">
            {scan.magnification}
          </MetaItem>
          <MetaItem wide label="Optics type">
            {scan.opticsType}
          </MetaItem>
          <MetaItem wide label="Pixel size">
            {scan.pixelSize}
          </MetaItem>
          <MetaItem wide label="Proj n">
            {scan.projN}
          </MetaItem>
          <MetaItem wide label="Ref n">
            {scan.refN}
          </MetaItem>
          <MetaItem wide label="Ref on">
            {scan.refOn}
          </MetaItem>
          <MetaItem wide label="Reference">
            {scan.referenceDescription}
          </MetaItem>
          <MetaItem wide label="Scan radix">
            {scan.scanRadix}
          </MetaItem>
          <MetaItem wide label="Scan range">
            {scan.scanRange}
          </MetaItem>
          <MetaItem wide label="Scan time">
            {scan.scanTime}
          </MetaItem>
          <MetaItem wide label="Scan mode">
            {scan.scanning_mode}
          </MetaItem>
          <MetaItem wide label="Scintillator">
            {scan.scintillator}
          </MetaItem>
          <MetaItem wide label="Series time">
            {scan.seriesTime}
          </MetaItem>
          <MetaItem wide label="VOI dose">
            {scan.voiDose}
          </MetaItem>
          <MetaItem wide label="Total VOI dose">
            {scan.totalVoiDose}
          </MetaItem>
          <MetaItem wide label="x stages">
            {scan.xStages}
          </MetaItem>
          <MetaItem wide label="x step">
            {scan.xStep}
          </MetaItem>
          <MetaItem wide label="x pixels">
            {scan.xPixelN}
          </MetaItem>
          <MetaItem wide label="y stages">
            {scan.yStages}
          </MetaItem>
          <MetaItem wide label="y step">
            {scan.yStep}
          </MetaItem>
          <MetaItem wide label="y pixels">
            {scan.yPixelN}
          </MetaItem>
          <MetaItem wide label="z stages">
            {scan.zStages}
          </MetaItem>
          <MetaItem wide label="z step">
            {scan.zStep}
          </MetaItem>
        </Box>
      </Box>
    </>
  );
}

export default DocumentMeta;
