import moment from 'moment';

export function parseDate(date) {
  return moment(date).format('L');
}

export function capitalizeAndSpace(str) {
  return `${str[0].toUpperCase()}${str.slice(1).replaceAll('_', ' ')}`;
}

export function documentSize(datasets) {
  const sum = datasets
    .map((item) => item.size)
    .reduce((acc, val) => acc + val, 0);

  return `${sum} MB`;
}

export function processDatasetResponse(datasetResponse) {
  const { documentId, instrument, parameters } = datasetResponse;

  const params = Object.fromEntries(
    parameters.map((param) => [param.name, param])
  );

  // console.log(datasetResponse);
  console.log(params);

  return {
    doi: documentId,
    title: params.datasetName.value,
    description: params.Notes_note_00.value,
    images: params.ResourcesGallery.value.split(' '),
    sample: {
      name: params.Sample_name.value,
      description: params.Sample_description.value,
      preparationDescription: params.Sample_preparation_description.value,
      notes: params.Sample_notes.value,
      publicationTitle: params.Sample_publication_title.value,
    },
    patient: {
      number: params.SamplePatient_number.value,
      institute: params.SamplePatient_institute.value,
      sex: params.SamplePatient_sex.value,
      age: params.SamplePatient_age.value,
      size: params.SamplePatient_size.value,
      weight: params.SamplePatient_weight.value,
      info: params.SamplePatient_info.value,
    },
    scan: {
      technique: params.definition.value,
      instrumentName: instrument.name,
      instrumentFacility: instrument.facility,
      detectorDescription: params.InstrumentDetector01_description.value,
      idNames: params.TOMO_idNames.value,
      acquisitionMode: params.InstrumentDetector01_acquisition_mode.value,
      current: params.InstrumentSource_current.value,
      accExposureTime: params.TOMO_accExposureTime.value,
      accFramesCount: params.TOMO_accFramesCount.value,
      darkN: params.TOMO_darkN.value,
      detectorDistance: params.TOMO_detectorDistance.value,
      energy: params.TOMO_energy.value,
      exposureTime: params.TOMO_exposureTime.value,
      halfAcquisition: params.TOMO_halfAcquisition.value,
      jp2CompressRatio: params.TOMO_jp2CompressRatio.value,
      magnification: params.TOMO_magnification.value,
      opticsType: params.TOMO_opticsType.value,
      pixelSize: params.TOMO_pixelSize.value,
      projN: params.TOMO_projN.value,
      refN: params.TOMO_refN.value,
      refOn: params.TOMO_refOn.value,
      referenceDescription: params.TOMO_reference_description.value,
      scanRadix: params.TOMO_scanRadix.value,
      scanRange: params.TOMO_scanRange.value,
      scanTime: params.TOMO_scanTime.value,
      scanning_mode: params.TOMO_scanning_mode.value,
      scintillator: params.TOMO_scintillator.value,
      seriesTime: params.TOMO_seriesTime.value,
      totalVoiDose: params.TOMO_total_voi_dose.value,
      voiDose: params.TOMO_voi_dose.value,
      xStages: params.TOMO_xStages.value,
      xStep: params.TOMO_xStep.value,
      xPixelN: params.TOMO_x_pixel_n.value,
      yStages: params.TOMO_yStages.value,
      yStep: params.TOMO_yStep.value,
      yPixelN: params.TOMO_y_pixel_n.value,
      zStages: params.TOMO_zStages.value,
      zStep: params.TOMO_zStep.value,
    },
  };
}
