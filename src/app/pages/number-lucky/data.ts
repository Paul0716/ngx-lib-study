import { Pairs } from './interfaces/numberPairs';
import { pairsStatus } from './enum/numberStatus';

const wordings = {
  pos: '伏位',
  noLife: '絕命',
  tMed: '天醫',
  live: '生氣',
  empty: '',
  sixBad: '六煞',
  extYear: '延年',
  fiveGhost: '五鬼',
  accident: '禍害'
};

export const data: Pairs[] = [
  {
    number: '01',
    status: pairsStatus.Normal,
    label: wordings.pos
  },
  {
    number: '02',
    status: pairsStatus.Normal,
    label: wordings.pos
  },
  {
    number: '03',
    status: pairsStatus.Normal,
    label: wordings.pos
  },
  {
    number: '04',
    status: pairsStatus.Normal,
    label: wordings.pos
  },
  {
    number: '05',
    status: pairsStatus.Normal,
    label: wordings.pos
  },
  {
    number: '06',
    status: pairsStatus.Normal,
    label: wordings.pos
  },
  {
    number: '07',
    status: pairsStatus.Normal,
    label: wordings.pos
  },
  {
    number: '08',
    status: pairsStatus.Normal,
    label: wordings.pos
  },
  {
    number: '09',
    status: pairsStatus.Normal,
    label: wordings.pos
  },
  {
    number: '10',
    status: pairsStatus.Normal,
    label: wordings.pos
  },
  {
    number: '11',
    status: pairsStatus.Normal,
    label: wordings.pos
  },
  {
    number: '12',
    status: pairsStatus.Bad,
    label: wordings.noLife
  },
  {
    number: '13',
    status: pairsStatus.Good,
    label: wordings.tMed
  },
  {
    number: '14',
    status: pairsStatus.Good,
    label: wordings.live
  },
  {
    number: '15',
    status: pairsStatus.Normal,
    label: wordings.empty
  },
  {
    number: '16',
    status: pairsStatus.Bad,
    label: wordings.sixBad
  },
  {

    number: '17',
    status: pairsStatus.Bad,
    label: wordings.accident
  },
  {
    number: '18',
    status: pairsStatus.Bad,
    label: wordings.fiveGhost
  },
  {
    number: '19',
    status: pairsStatus.Good,
    label: wordings.extYear
  },
  {
    number: '20',
    status: pairsStatus.Normal,
    label: wordings.pos
  },
  {
    number: '21',
    status: pairsStatus.Bad,
    label: wordings.noLife
  },
  {
    number: '22',
    status: pairsStatus.Normal,
    label: wordings.pos
  },
  {
    number: '21',
    status: pairsStatus.Bad,
    label: wordings.noLife
  },
  {
    number: '22',
    status: pairsStatus.Normal,
    label: wordings.pos
  },
  {
    number: '23',
    status: pairsStatus.Bad,
    label: wordings.accident
  },
  {
    number: '24',
    status: pairsStatus.Bad,
    label: wordings.fiveGhost
  },
  {
    number: '25',
    status: pairsStatus.Normal,
    label: wordings.empty
  },
  {
    number: '26',
    status: pairsStatus.Good,
    label: wordings.extYear
  },
  {
    number: '27',
    status: pairsStatus.Good,
    label: wordings.tMed
  },
  {
    number: '28',
    status: pairsStatus.Good,
    label: wordings.live
  },
  {
    number: '29',
    status: pairsStatus.Bad,
    label: wordings.sixBad
  },
  {
    number: '30',
    status: pairsStatus.Normal,
    label: wordings.pos
  },
  {
    number: '31',
    status: pairsStatus.Good,
    label: wordings.tMed
  },
  {
    number: '32',
    status: pairsStatus.Bad,
    label: wordings.accident
  },
  {
    number: '33',
    status: pairsStatus.Normal,
    label: wordings.pos
  },
  {
    number: '34',
    status: pairsStatus.Good,
    label: wordings.extYear
  },
  {
    number: '35',
    status: pairsStatus.Normal,
    label: wordings.empty
  },
  {
    number: '36',
    status: pairsStatus.Bad,
    label: wordings.fiveGhost
  },
  {
    number: '37',
    status: pairsStatus.Bad,
    label: wordings.noLife
  },
  {
    number: '38',
    status: pairsStatus.Bad,
    label: wordings.sixBad
  },
  {
    number: '39',
    status: pairsStatus.Good,
    label: wordings.live
  },
  {
    number: '40',
    status: pairsStatus.Normal,
    label: wordings.pos
  },
  {
    number: '41',
    status: pairsStatus.Good,
    label: wordings.live
  },
  {
    number: '42',
    status: pairsStatus.Bad,
    label: wordings.fiveGhost
  },
  {
    number: '43',
    status: pairsStatus.Good,
    label: wordings.extYear
  },
  {
    number: '44',
    status: pairsStatus.Normal,
    label: wordings.pos
  },
  {
    number: '45',
    status: pairsStatus.Normal,
    label: wordings.empty
  },
  {
    number: '46',
    status: pairsStatus.Bad,
    label: wordings.accident
  },
  {
    number: '47',
    status: pairsStatus.Bad,
    label: wordings.sixBad
  },
  {
    number: '48',
    status: pairsStatus.Bad,
    label: wordings.noLife
  },
  {
    number: '49',
    status: pairsStatus.Good,
    label: wordings.tMed
  },
  {
    number: '50',
    status: pairsStatus.Normal,
    label: wordings.pos
  },
  {
    number: '51',
    status: pairsStatus.Normal,
    label: wordings.empty
  },
  {
    number: '52',
    status: pairsStatus.Normal,
    label: wordings.empty
  },
  {
    number: '53',
    status: pairsStatus.Normal,
    label: wordings.empty
  },
  {
    number: '54',
    status: pairsStatus.Normal,
    label: wordings.empty
  },
  {
    number: '55',
    status: pairsStatus.Normal,
    label: wordings.pos
  },
  {
    number: '56',
    status: pairsStatus.Normal,
    label: wordings.empty
  },
  {
    number: '57',
    status: pairsStatus.Normal,
    label: wordings.empty
  },
  {
    number: '58',
    status: pairsStatus.Normal,
    label: wordings.empty
  },
  {
    number: '59',
    status: pairsStatus.Normal,
    label: wordings.empty
  },
  {
    number: '60',
    status: pairsStatus.Normal,
    label: wordings.pos
  },
  {
    number: '61',
    status: pairsStatus.Bad,
    label: wordings.sixBad
  },
  {
    number: '62',
    status: pairsStatus.Normal,
    label: wordings.empty
  },
  {
    number: '62',
    status: pairsStatus.Normal,
    label: wordings.empty
  },
  {
    number: '63',
    status: pairsStatus.Bad,
    label: wordings.fiveGhost
  },
  {
    number: '64',
    status: pairsStatus.Bad,
    label: wordings.accident
  },
  {
    number: '65',
    status: pairsStatus.Normal,
    label: wordings.empty
  },
  {
    number: '66',
    status: pairsStatus.Normal,
    label: wordings.pos
  },
  {
    number: '67',
    status: pairsStatus.Good,
    label: wordings.live
  },
  {
    number: '68',
    status: pairsStatus.Good,
    label: wordings.tMed
  },
  {
    number: '69',
    status: pairsStatus.Bad,
    label: wordings.noLife
  },
  {
    number: '70',
    status: pairsStatus.Normal,
    label: wordings.pos
  },
  {
    number: '71',
    status: pairsStatus.Bad,
    label: wordings.accident
  },
  {
    number: '72',
    status: pairsStatus.Good,
    label: wordings.tMed
  },
  {
    number: '73',
    status: pairsStatus.Bad,
    label: wordings.noLife
  },
  {
    number: '74',
    status: pairsStatus.Bad,
    label: wordings.sixBad
  },
  {
    number: '75',
    status: pairsStatus.Normal,
    label: wordings.empty
  },
  {
    number: '76',
    status: pairsStatus.Good,
    label: wordings.live
  },
  {
    number: '77',
    status: pairsStatus.Normal,
    label: wordings.pos
  },
  {
    number: '78',
    status: pairsStatus.Good,
    label: wordings.extYear
  },
  {
    number: '79',
    status: pairsStatus.Bad,
    label: wordings.fiveGhost
  },
  {
    number: '80',
    status: pairsStatus.Normal,
    label: wordings.pos
  },
  {
    number: '81',
    status: pairsStatus.Bad,
    label: wordings.fiveGhost
  },
  {
    number: '82',
    status: pairsStatus.Good,
    label: wordings.live
  },
  {
    number: '83',
    status: pairsStatus.Bad,
    label: wordings.sixBad
  },
  {
    number: '84',
    status: pairsStatus.Bad,
    label: wordings.noLife
  },
  {
    number: '85',
    status: pairsStatus.Normal,
    label: wordings.empty
  },
  {
    number: '86',
    status: pairsStatus.Good,
    label: wordings.tMed
  },
  {
    number: '87',
    status: pairsStatus.Good,
    label: wordings.extYear
  },
  {
    number: '88',
    status: pairsStatus.Normal,
    label: wordings.pos
  },
  {
    number: '89',
    status: pairsStatus.Bad,
    label: wordings.accident
  },
  {
    number: '90',
    status: pairsStatus.Normal,
    label: wordings.pos
  },
  {
    number: '91',
    status: pairsStatus.Good,
    label: wordings.extYear
  },
  {
    number: '92',
    status: pairsStatus.Bad,
    label: wordings.sixBad
  },
  {
    number: '93',
    status: pairsStatus.Good,
    label: wordings.live
  },
  {
    number: '94',
    status: pairsStatus.Good,
    label: wordings.tMed
  },
  {
    number: '95',
    status: pairsStatus.Normal,
    label: wordings.empty
  },
  {
    number: '96',
    status: pairsStatus.Bad,
    label: wordings.noLife
  },
  {
    number: '97',
    status: pairsStatus.Bad,
    label: wordings.fiveGhost
  },
  {
    number: '98',
    status: pairsStatus.Bad,
    label: wordings.accident
  },
  {
    number: '99',
    status: pairsStatus.Normal,
    label: wordings.pos
  },
];
