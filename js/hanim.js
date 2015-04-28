// http://h-anim.org/Specifications/H-Anim200x/ISO_IEC_FCD_19774/FeaturePoints.html
// taken from http://h-anim.org/Specifications/H-Anim200x/ISO_IEC_FCD_19774/BodyDimensionsAndLOAs.html#LOA0DefaultSiteTranslations
var data_ref = {
  skull_tip:               { pt:  0, x:  0.0050, y: 1.7504, z:  0.0055 },
  sellion:                 { pt:  1, x:  0.0058, y: 1.6316, z:  0.0852 },
  r_infraorbitale:         { pt:  2, x: -0.0237, y: 1.6171, z:  0.0752 },
  l_infraorbitale:         { pt:  3, x:  0.0341, y: 1.6171, z:  0.0752 },
  supramenton:             { pt:  4, x:  0.0061, y: 1.5410, z:  0.0805 },
  r_tragion:               { pt:  5, x: -0.0646, y: 1.6347, z:  0.0302 },
  r_gonion:                { pt:  6, x: -0.0520, y: 1.5529, z:  0.0347 },
  l_tragion:               { pt:  7, x:  0.0739, y: 1.6348, z:  0.0282 },
  l_gonion:                { pt:  8, x:  0.0631, y: 1.5530, z:  0.0330 },
  nuchale:                 { pt:  9, x:  0.0039, y: 1.5972, z: -0.0796 },
  r_clavicale:             { pt: 10, x: -0.0115, y: 1.4943, z:  0.0400 },
  suprasternale:           { pt: 11, x:  0.0084, y: 1.4714, z:  0.0551 },
  l_clavicale:             { pt: 12, x:  0.0271, y: 1.4943, z:  0.0394 },
  r_thelion:               { pt: 13, x: -0.0736, y: 1.3385, z:  0.1217 },
  l_thelion:               { pt: 14, x:  0.0918, y: 1.3382, z:  0.1192 },
  substernale:             { pt: 15, x:  0.0085, y: 1.2995, z:  0.1147 },
  r_rib10:                 { pt: 16, x: -0.0711, y: 1.1941, z:  0.1016 },
  r_asis:                  { pt: 17, x: -0.0887, y: 1.0021, z:  0.1112 },
  l_rib10:                 { pt: 18, x:  0.0871, y: 1.1925, z:  0.0992 },
  l_asis:                  { pt: 19, x:  0.0925, y: 0.9983, z:  0.1052 },
  r_iliocristale:          { pt: 20, x: -0.1525, y: 1.0628, z:  0.0035 },
  r_trochanterion:         { pt: 21, x: -0.1689, y: 0.8419, z:  0.0352 },
  l_iliocristale:          { pt: 22, x:  0.1612, y: 1.0537, z:  0.0008 },
  l_trochanterion:         { pt: 23, x:  0.1677, y: 0.8336, z:  0.0303 },
  cervicale:               { pt: 24, x:  0.0064, y: 1.5200, z: -0.0815 },
  rib10_midspine:          { pt: 25, x:  0.0049, y: 1.1908, z: -0.1113 },
  r_psis:                  { pt: 26, x: -0.0716, y: 1.0190, z: -0.1138 },
  l_psis:                  { pt: 27, x:  0.0774, y: 1.0190, z: -0.1151 },
  waist_preferred_post:    { pt: 28, x:  0.0049, y: 1.0915, z: -0.1091 },
  r_acromion:              { pt: 29, x: -0.1905, y: 1.4791, z: -0.0431 },
  r_axilla_ant:            { pt: 30, x: -0.1626, y: 1.4072, z: -0.0031 },
  r_radial_styloid:        { pt: 31, x: -0.1884, y: 0.8676, z: -0.0360 },
  r_axilla_post:           { pt: 32, x: -0.1603, y: 1.4098, z: -0.0826 },
  r_olecranon:             { pt: 33, x: -0.1907, y: 1.1405, z: -0.1065 },
  r_humeral_lateral_epicn: { pt: 34, x: -0.2224, y: 1.1517, z: -0.1033 },
  r_humeral_medial_epicn:  { pt: 35, x: -0.1680, y: 1.1298, z: -0.1062 },
  r_radiale:               { pt: 36, x: -0.2130, y: 1.1305, z: -0.1091 },
  r_metacarpal_pha2:       { pt: 37, x: -0.1977, y: 0.8169, z: -0.0177 },
  r_dactylion:             { pt: 38, x: -0.1941, y: 0.6772, z: -0.0423 },
  r_ulnar_styloid:         { pt: 39, x: -0.2117, y: 0.8562, z: -0.0584 },
  r_metacarpal_pha5:       { pt: 40, x: -0.1929, y: 0.7890, z: -0.1064 },
  l_acromion:              { pt: 41, x:  0.2032, y: 1.4760, z: -0.0490 },
  l_axilla_ant:            { pt: 42, x:  0.1777, y: 1.4065, z: -0.0075 },
  l_radial_styloid:        { pt: 43, x:  0.1901, y: 0.8645, z: -0.0415 },
  l_axilla_post:           { pt: 44, x:  0.1706, y: 1.4072, z: -0.0875 },
  l_olecranon:             { pt: 45, x:  0.1962, y: 1.1375, z: -0.1123 },
  l_humeral_lateral_epicn: { pt: 46, x:  0.2280, y: 1.1482, z: -0.1100 },
  l_humeral_medial_epicn:  { pt: 47, x:  0.1735, y: 1.1272, z: -0.1113 },
  l_radiale:               { pt: 48, x:  0.2182, y: 1.1212, z: -0.1167 },
  l_metacarpal_pha2:       { pt: 49, x:  0.2009, y: 0.8139, z: -0.0237 },
  l_dactylion:             { pt: 50, x:  0.2056, y: 0.6743, z: -0.0482 },
  l_ulnar_styloid:         { pt: 51, x:  0.2142, y: 0.8529, z: -0.0648 },
  l_metacarpal_pha5:       { pt: 52, x:  0.1929, y: 0.7860, z: -0.1122 },
  r_knee_crease:           { pt: 53, x: -0.0825, y: 0.4932, z: -0.0326 },
  r_femoral_lateral_epicn: { pt: 54, x: -0.1421, y: 0.4992, z:  0.0310 },
  r_femoral_medial_epicn:  { pt: 55, x: -0.0221, y: 0.5014, z:  0.0289 },
  r_metatarsal_pha5:       { pt: 56, x: -0.1523, y: 0.0166, z:  0.0895 },
  r_lateral_malleolus:     { pt: 57, x: -0.1006, y: 0.0658, z: -0.1075 },
  r_medial_malleolus:      { pt: 58, x: -0.0591, y: 0.0760, z: -0.0928 },
  r_sphyrion:              { pt: 59, x: -0.0603, y: 0.0610, z: -0.1002 },
  r_metatarsal_pha1:       { pt: 60, x: -0.0521, y: 0.0260, z:  0.0127 },
  r_calcaneous_post:       { pt: 61, x: -0.0692, y: 0.0297, z: -0.1221 },
  r_digit2:                { pt: 62, x: -0.0883, y: 0.0134, z:  0.1383 },
  l_knee_crease:           { pt: 63, x:  0.0993, y: 0.4881, z: -0.0309 },
  l_femoral_lateral_epicn: { pt: 64, x:  0.1598, y: 0.4967, z:  0.0297 },
  l_femoral_medial_epicn:  { pt: 65, x:  0.0398, y: 0.4946, z:  0.0303 },
  l_metatarsal_pha5:       { pt: 66, x:  0.1825, y: 0.0070, z:  0.0928 },
  l_lateral_malleolus:     { pt: 67, x:  0.1308, y: 0.0597, z: -0.1032 },
  l_medial_malleolus:      { pt: 68, x:  0.0890, y: 0.0716, z: -0.0881 },
  l_sphyrion:              { pt: 69, x:  0.0890, y: 0.0575, z: -0.0943 },
  l_metatarsal_pha1:       { pt: 70, x:  0.0816, y: 0.0232, z:  0.0106 },
  l_calcaneous_post:       { pt: 71, x:  0.0974, y: 0.0259, z: -0.1171 },
  l_digit2:                { pt: 72, x:  0.1195, y: 0.0079, z:  0.1433 },
  crotch:                  { pt: 73, x:  0.0034, y: 0.8266, z:  0.0257 },
  r_neck_base:             { pt: 74, x: -0.0419, y: 1.5149, z: -0.0220 },
  l_neck_base:             { pt: 75, x:  0.0646, y: 1.5141, z: -0.0380 },
  navel:                   { pt: 76, x:  0.0069, y: 1.0966, z:  0.1017 },
};
data_ref[0]=data_ref['skull_tip'];
data_ref[1]=data_ref['sellion'];
data_ref[2]=data_ref['r_infraorbitale'];
data_ref[3]=data_ref['l_infraorbitale'];
data_ref[4]=data_ref['supramenton'];
data_ref[5]=data_ref['r_tragion'];
data_ref[6]=data_ref['r_gonion'];
data_ref[7]=data_ref['l_tragion'];
data_ref[8]=data_ref['l_gonion'];
data_ref[9]=data_ref['nuchale'];
data_ref[10]=data_ref['r_clavicale'];
data_ref[11]=data_ref['suprasternale'];
data_ref[12]=data_ref['l_clavicale'];
data_ref[13]=data_ref['r_thelion'];
data_ref[14]=data_ref['l_thelion'];
data_ref[15]=data_ref['substernale'];
data_ref[16]=data_ref['r_rib10'];
data_ref[17]=data_ref['r_asis'];
data_ref[18]=data_ref['l_rib10'];
data_ref[19]=data_ref['l_asis'];
data_ref[20]=data_ref['r_iliocristale'];
data_ref[21]=data_ref['r_trochanterion'];
data_ref[22]=data_ref['l_iliocristale'];
data_ref[23]=data_ref['l_trochanterion'];
data_ref[24]=data_ref['cervicale'];
data_ref[25]=data_ref['rib10_midspine'];
data_ref[26]=data_ref['r_psis'];
data_ref[27]=data_ref['l_psis'];
data_ref[28]=data_ref['waist_preferred_post'];
data_ref[29]=data_ref['r_acromion'];
data_ref[30]=data_ref['r_axilla_ant'];
data_ref[31]=data_ref['r_radial_styloid'];
data_ref[32]=data_ref['r_axilla_post'];
data_ref[33]=data_ref['r_olecranon'];
data_ref[34]=data_ref['r_humeral_lateral_epicn'];
data_ref[35]=data_ref['r_humeral_medial_epicn'];
data_ref[36]=data_ref['r_radiale'];
data_ref[37]=data_ref['r_metacarpal_pha2'];
data_ref[38]=data_ref['r_dactylion'];
data_ref[39]=data_ref['r_ulnar_styloid'];
data_ref[40]=data_ref['r_metacarpal_pha5'];
data_ref[41]=data_ref['l_acromion'];
data_ref[42]=data_ref['l_axilla_ant'];
data_ref[43]=data_ref['l_radial_styloid'];
data_ref[44]=data_ref['l_axilla_post'];
data_ref[45]=data_ref['l_olecranon'];
data_ref[46]=data_ref['l_humeral_lateral_epicn'];
data_ref[47]=data_ref['l_humeral_medial_epicn'];
data_ref[48]=data_ref['l_radiale'];
data_ref[49]=data_ref['l_metacarpal_pha2'];
data_ref[50]=data_ref['l_dactylion'];
data_ref[51]=data_ref['l_ulnar_styloid'];
data_ref[52]=data_ref['l_metacarpal_pha5'];
data_ref[53]=data_ref['r_knee_crease'];
data_ref[54]=data_ref['r_femoral_lateral_epicn'];
data_ref[55]=data_ref['r_femoral_medial_epicn'];
data_ref[56]=data_ref['r_metatarsal_pha5'];
data_ref[57]=data_ref['r_lateral_malleolus'];
data_ref[58]=data_ref['r_medial_malleolus'];
data_ref[59]=data_ref['r_sphyrion'];
data_ref[60]=data_ref['r_metatarsal_pha1'];
data_ref[61]=data_ref['r_calcaneous_post'];
data_ref[62]=data_ref['r_digit2'];
data_ref[63]=data_ref['l_knee_crease'];
data_ref[64]=data_ref['l_femoral_lateral_epicn'];
data_ref[65]=data_ref['l_femoral_medial_epicn'];
data_ref[66]=data_ref['l_metatarsal_pha5'];
data_ref[67]=data_ref['l_lateral_malleolus'];
data_ref[68]=data_ref['l_medial_malleolus'];
data_ref[69]=data_ref['l_sphyrion'];
data_ref[70]=data_ref['l_metatarsal_pha1'];
data_ref[71]=data_ref['l_calcaneous_post'];
data_ref[72]=data_ref['l_digit2'];
data_ref[73]=data_ref['crotch'];
data_ref[74]=data_ref['r_neck_base'];
data_ref[75]=data_ref['l_neck_base'];
data_ref[76]=data_ref['navel'];


/*
root:
  l_hip:
    # l_thigh
    l_knee
      # l_calf
      l_ankle
        # l_hindfoot
        l_midtarsal
  vl5
    # l5
    skullbase
    l_shoulder
      #l_upperarm
      l_elbow
        #l_forearm
        l_wrist

*/
var face_ref = {
  l_eyeball_joint: {},
  l_eyebrow_joint: {},
  l_eyelid_joint: {},
  r_eyeball_joint: {},
  r_eyebrow_joint: {},
  r_eyelid_joint: {},
  temporomandibular: {}
};
// http://www.hbinno.com/index3f35.html?page_id=8
var face_ref = {
  tr: {},
  n: {},

  // eyes
  r_en: {},
  r_ex: {},
  r_ps: {},
  r_pi: {},

  l_en: {},
  l_ex: {},
  l_ps: {},
  l_pi: {},

  // ears
  r_zy: {},
  l_zy: {},

  //nose
  sn: {},
  r_al: {},
  l_al: {},

  //mouth
  ls: {},
  sto: {},
  li: {},
  sl: {},
  r_ch: {},
  l_ch: {},

  gn: {},
  l_go: {},
  r_go: {}
};
