// import individualServiceImg from '@/assets/images/service/individual_service.png'
const health =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/service/health.jpg'
const featureService1 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/service/feature_service1.jpg?imageMogr2/thumbnail/!50p'
const featureService2 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/service/feature_service2.jpg?imageMogr2/thumbnail/!50p'
const featureService3 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/service/feature_service3.jpg?imageMogr2/thumbnail/!50p'
const featureService4 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/service/feature_service4.jpg?imageMogr2/thumbnail/!50p'
const greenChannel =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/service/green.jpg'
const outpatientService =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/service/outpatient.jpg?imageMogr2/thumbnail/!50p'
const outpatientService2 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/service/outpatient2.jpg?imageMogr2/thumbnail/!50p'
export const serviceDetailList = [
  {
    type: 'individual',
    serviceTile: {
      title: '个人服务',
      count:
        '富乐医疗提供门诊、疫苗接种、转诊绿色通道等医疗服务，以及日间手术、胃肠镜检查、高端私人定制健康筛查等特色服务。',
      img:
        'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/service/service1.png'
    },
    serviceCount: [
      {
        title: '门诊服务',
        img: [
          { img: outpatientService, url: '' },
          { img: outpatientService2, url: '' }
        ],
        connt: [
          {
            title: '临床服务：',
            text: `<p class="text_title">全科、内科、外科、儿科、妇科、耳鼻喉科、口腔科、麻醉科、内镜中心、日间手术室、医学影像科、检验科、药房等<p>`
          },
          {
            title: '医疗辅助服务：',
            text: `<p class="text_title"><span>医疗影像诊断服务：</span> 核磁共振成像、CT、X光、超声波、钼靶射片、骨密度测定</p>
                    <p class="text_title"><span>心血管疾病： </span>心血管疾病的医疗管理</p>
                    <p class="text_title"><span>理疗：</span> 骨科、运动、肌肉骨骼与创伤的治疗和康复</p>`
          },
          {
            title: '药事服务：',
            text: `<p class="text_title"><span>牙科：</span> 洁牙、洁治与抛光、种植治疗、智齿手术</p>`
          }
        ]
      },
      {
        title: '特色服务',
        img: [
          { img: featureService1, url: '' },
          { img: featureService2, url: '' },
          { img: featureService3, url: '' },
          { img: featureService4, url: '' }
        ],
        connt: [
          {
            title: '疫苗接种服务：',
            text: `<p class="text_title">富乐医疗将提供儿童疫苗、成人疫苗接种服务。<br>
                    <span>第一类疫苗：</span><br>
                    常用的有：乙肝疫苗、卡介苗、脊髓灰质炎疫苗、百日破疫苗、麻腮风疫苗、白破疫苗、甲肝疫苗、A+C群流脑疫苗、乙脑疫苗，以及在重点地区对重点人群接种额出血热疫苗，炭疽疫苗和钩端螺旋体疫苗。<br>
                    <span>第二类疫苗：</span><br>公民自费并且自愿受种的其他疫苗。常用的有：流感疫苗、水痘疫苗、B型流感嗜血杆菌疫苗、HPV宫颈疫苗、口服轮状病毒疫苗、肺炎疫苗、狂犬病疫苗等。
                    <p>`
          },
          {
            title: '高端健康筛查：',
            text: `<p class="text_title">贵宾筛查舱兼顾私密性与舒适度，在独立、洁净的体检舱内，贵宾可享受私人定制体检服务，由资深医生和护士一站式检查，且能安静地享用健康营养早餐。</p>
              `
          },
          {
            title: '日间手术：',
            text: `<p class="text_title">特点：患者不必过夜，手术时间等待短，价格合理。<br>
            上海乐静门诊部手术室拥有细致的术前评估流程、先进的手术室条件和设备、专业的手术医生和麻醉医生、科学合理的就医流程以及完善的术后随访系统。</p>
              `
          },
          {
            title: '胃肠镜服务：',
            text: `<p class="text_title">患者在严密的监护下，进行胃肠镜检查以及治疗，使治疗更加精准和微创。</p>
              `
          }
        ]
      },
      {
        title: '绿色通道',
        img: [{ img: greenChannel, url: '' }],
        connt: [
          {
            title: '第三方医疗管理服务：',
            text: `<p class="text_title">当客户遇到疑难重病、病症加重时，富乐医疗为客户提供公立三甲医院转诊服务，进一步深入检查、诊疗，避免延误诊疗时机，打造一个便于客户就诊的医疗网络。
                    <p>`
          },
          {
            title: '国际转诊服务：',
            text: `<p class="text_title">当客户遇到疑难重病、病症加重或时，富乐医疗为客户提供海外医疗机构转诊服务，进一步深入检查、诊疗，避免延误诊疗时机，打造一个便于客户就诊的海外医疗网络。</p>
              `
          }
        ]
      }
    ]
  },
  {
    type: 'enterprise',
    serviceTile: {
      title: '企业医务室',
      count:
        '富乐医疗通过企业医疗中心，零售诊所及医疗网络服务可为客户提供从诊疗到医疗费用直付的全面服务。',
      img:
        'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/service/service2.png'
    },
    serviceCount: [
      {
        title: '企业健康服务',
        img: [{ img: health, url: '' }],
        connt: [
          {
            title: '',
            text: `<p class="text_title"><span>急救点：</span> 帮助员工及时解决紧急医疗状况，降低病假率。</p>
            <p class="text_title"><span>员工健康管理中心：</span> 有效降低80%的健康恶性事件(如猝死案例等)；效降低50%左右的病假率</p>
            <p class="text_title"><span>现场医疗中心：</span> 有效降低保险理赔率30%左右；效预防职业病（可达100%）；病管理、传染病管理能有效预防疾病发生，降低过度医疗。</p>
            <p class="text_title"><span>福利管理及健康管理体系建立：</span> 完善的健康福利是提升员工忠诚度的重要因素。</p>
            
            `
          }
        ]
      }
    ]
  }
]
