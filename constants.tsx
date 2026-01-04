
import { Artwork, Exhibition, Service } from './types';

export const COLORS = {
  bg: '#F9F8F6',
  accent: '#8C7355', // 复泓金
  text: '#1A1A1A',
  textMuted: '#666666',
  white: '#FFFFFF'
};

export const ARTWORKS: Artwork[] = [
  {
    id: '1',
    title: '永恒的寂静 (Eternal Silence)',
    artist: '李华 (Li Hua)',
    year: '2023',
    medium: '布面油画 (Oil on Canvas)',
    dimensions: '120 x 150 cm',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1945&auto=format&fit=crop',
    description: '此作品探讨了人与自然之间的深层联系，通过层叠的色彩传达出一种静谧的叙事力量。',
    status: 'available'
  },
  {
    id: '2',
    title: '流动的城市 (Flowing City)',
    artist: '陈墨 (Chen Mo)',
    year: '2024',
    medium: '混合媒介 (Mixed Media)',
    dimensions: '80 x 100 cm',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1974&auto=format&fit=crop',
    description: '通过对城市光影的抽象处理，艺术家捕捉到了现代生活中的瞬时律动。',
    status: 'private'
  }
];

export const EXHIBITIONS: Exhibition[] = [
  {
    id: 'ex1',
    title: '界：当代叙事展',
    subtitle: 'BOUNDARY: CONTEMPORARY NARRATIVES',
    date: '2024.05.01 - 2024.06.15',
    status: 'current',
    image: 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?q=80&w=2145&auto=format&fit=crop'
  },
  {
    id: 'ex2',
    title: '流动的维度：新媒体艺术展',
    subtitle: 'FLUID DIMENSIONS: NEW MEDIA ART',
    date: '2024.07.10 - 2024.08.30',
    status: 'upcoming',
    image: 'https://images.unsplash.com/photo-1554188248-986adbb73be4?q=80&w=2070&auto=format&fit=crop'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'representation',
    title: '艺术代理',
    subtitle: 'REPRESENTATION',
    description: '复泓画廊深耕优质艺术资源，为当代具有学术深度的艺术家搭建多维度的推广矩阵，建立长效的品牌价值体系。',
    steps: ['学术梳理与定位', '全球展览排期', '藏家关系维护', '艺术衍生开发'],
    image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1976&auto=format&fit=crop',
    icon: ''
  },
  {
    id: 'consignment',
    title: '委托销售',
    subtitle: 'CONSIGNMENT',
    description: '面向个人及机构藏家提供专业的委托销售服务。依托复泓庞大的买家数据库，确保每一件艺术品在最合适的时机成交。',
    steps: ['藏品提交初筛', '物理状况评估', '估价报告制定', '私密或公开推广'],
    image: 'https://images.unsplash.com/photo-1577083165350-16c840244f79?q=80&w=1974&auto=format&fit=crop',
    icon: ''
  },
  {
    id: 'private-sale',
    title: '私人洽购',
    subtitle: 'PRIVATE SALES',
    description: '借鉴苏富比、佳士得的 Private Treaty 模式，为极致藏家提供跨国、跨品类的寻件与私密交易，确保交易过程的安全与低调。',
    steps: ['深度需求分析', '全球资源调拨', '私密预展预约', '跨境物流保障'],
    image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=2038&auto=format&fit=crop',
    icon: ''
  },
  {
    id: 'acquisition',
    title: '艺术收购',
    subtitle: 'ACQUISITION',
    description: '长期收购具有收藏价值与市场潜力的经典作品。复泓保证交易的合规性、保真性，并提供极具竞争力的现金结算方案。',
    steps: ['真伪学术鉴定', '资产状况核实', '公平价值评估', '即时资金清算'],
    image: 'https://images.unsplash.com/photo-1545987796-200f77df9d69?q=80&w=2070&auto=format&fit=crop',
    icon: ''
  },
  {
    id: 'auction-consulting',
    title: '拍卖协商',
    subtitle: 'AUCTION CONSULTING',
    description: '凭借与全球顶级拍卖机构的深厚战略合作，为藏家提供拍卖标的咨询、委托上拍及竞投代理等专业化协作服务。',
    steps: ['拍品征集策略', '上拍条件协商', '佣金费用统筹', '现场竞投代理'],
    image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=2080&auto=format&fit=crop',
    icon: ''
  },
  {
    id: 'planning',
    title: '收藏规划',
    subtitle: 'COLLECTION PLANNING',
    description: '为超高净值人群量身定制长期艺术资产配置方案。从学术体系构建到实物养护，全方位打理艺术收藏。',
    steps: ['资产现状分析', '收藏体系构建', '年度购藏建议', '藏品养护管理'],
    image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=2071&auto=format&fit=crop',
    icon: ''
  }
];
