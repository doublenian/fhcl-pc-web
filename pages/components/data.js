const qrCode =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/clinicalNetwork/qr_code.jpg'

const clinic12Doctor2 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/clinic-detail/clinic12-doctor2.jpg'
const clinic12Doctor3 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/clinic-detail/clinic12-doctor3.jpg'

const clinic10Doctor3 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/clinic-detail/clinic10-doctor3.jpg'
const clinic10Doctor1 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/clinic-detail/clinic10-doctor1.jpg'

const clinic10Doctor12 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/clinic-detail/clinic10-doctor12.jpg'
const clinic10Doctor26 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/clinic-detail/clinic10-doctor26.jpg'
const clinic11Doctor3 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/clinic-detail/clinic11-doctor3.jpg'
const clinic11Doctor5 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/clinic-detail/clinic11-doctor5.jpg'

const clinic11Doctor6 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/clinic-detail/clinic11-doctor6.jpg'

export const doctors = [
  {
    headPortrait: clinic12Doctor2,
    name: '陆金忠',
    title: '主任医师',
    departments: '内科',
    departmentsId: '2',
    desc:
      '拥有超过二十年内科临床执业经验，擅长内科常见病的诊断及治疗，也能处理更加复杂、困难的病例。在成人内分泌疾病、肾病以及脑卒中等多种疾病的治疗方面积累了丰富的临床经验。',
    qrCode: qrCode
  },
  {
    headPortrait: clinic12Doctor3,
    name: '张颖',
    title: '主治医师',
    departments: '内科',
    departmentsId: '2',
    desc:
      '执业时间超过二十年，拥有丰富的全科工作经验，擅长为成人和儿童提供以循证医学为依据的急性疾病诊治、慢性疾病健康管理服务、预防性成人健康保健服务和小型外科手术等全科诊疗服务。',
    qrCode: qrCode
  },
  {
    headPortrait: clinic10Doctor3,
    name: '谢弘毅',
    title: '主治医师',
    departments: '妇科',
    departmentsId: '3',
    desc:
      '从事妇产科临床工作20余年，熟练掌握各种妇科炎症利用药物或微创技术相结合的诊治手段，特别擅长阴道镜及宫颈疾病的诊治。 ',
    qrCode: qrCode
  },
  {
    headPortrait:
      'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/clinic-detail/clinic10-doctor101.jpg',
    name: '李丹',
    title: '副主任医师',
    departments: '心内科',
    departmentsId: '17',
    desc:
      '从事心内科临床工作二十余年，曾任三甲医院心内科主任，擅长冠心病、心力衰竭、心律失常、高血压、呼吸系统及见疾病的诊治，对各种复杂、疑难心血管病，有着丰富的经验。',
    qrCode: qrCode
  },
  {
    headPortrait: clinic10Doctor1,
    name: '陈继荣',
    title: '主治医师',
    departments: '麻醉科',
    departmentsId: '21',
    desc:
      '从事麻醉临床工作20余年，擅长麻醉前根据患者情况制定个性化麻醉方案，精准施治，加速康复。关注围术期就医体验，注重心理疏导。',
    qrCode: qrCode
  },
  {
    headPortrait: clinic10Doctor12,
    name: '周韵玫',
    title: '主治医师',
    departments: '口腔科',
    departmentsId: '4',
    desc:
      '从事口腔科工作20余年，擅长口腔各种常见病的诊治，如牙齿的美容修复，牙体牙髓病的诊治，牙周病和牙周手术的治疗，复杂牙拔除术，口腔各种常见病的手术治疗。 ',
    qrCode: qrCode
  },
  {
    headPortrait: clinic10Doctor26,
    name: '李幸红',
    title: '主治医师',
    departments: '儿童保健科',
    departmentsId: '20',
    desc:
      '从事临床工作20年，熟悉各种新生儿疾病、儿科常见病、多发病、传染病的诊治，危重症疾病的抢救。擅长对各年龄阶段儿童生长发育评估，有针对性地进行发育指导、营养指导。',
    qrCode: qrCode
  },
  {
    headPortrait: clinic11Doctor3,
    name: '吕恩基 ',
    title: '主治医师',
    departments: '中医科',
    departmentsId: '5',
    desc:
      '师从著名中医骨科专家朱云龙教授。精于针、药和手法相结合治疗内科和软伤科疾病，尤其擅长运动损伤、颈胸腰椎疾患及关节病变的中医治疗。',
    qrCode: qrCode
  },
  {
    headPortrait: clinic11Doctor5,
    name: '包文婷',
    title: '主治医师',
    departments: '妇科、全科',
    departmentsId: ['1', '3'],
    desc:
      '十年以上的临床工作经验。擅长妇科常见疾病的诊断及治疗，对宫颈癌的早期筛查，女性产前检查及治疗，女性不孕不育检查及分析指导等方面有丰富的经验。修习了儿童生长发育相关知识及异常情況处理。 ',
    qrCode: qrCode
  },
  {
    headPortrait: clinic11Doctor6,
    name: '修海龙',
    title: '主治医师',
    departments: '内科',
    departmentsId: '2',
    desc:
      '从事内科临床工作近20 年，原武警辽宁省总队医院任内科医师。对心脑血管及内分泌疾病，如冠心病、高血压、糖尿病的诊断治疗积累了较为丰富的临床经验，并对常见的呼吸系统疾病如上呼吸道感染、支气管炎、肺炎、支气管哮喘等也有丰富的治疗经验。',
    qrCode: qrCode
  }
]
