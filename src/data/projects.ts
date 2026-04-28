import { Project } from '../types/Project';

export const projects: Project[] = [
  {
    id: '1',
    title: 'ZeroEntropy',
    titleAr: 'زيرو أنتروبي',
    description: 'Advanced AI platform for intelligent data processing and analysis',
    descriptionAr: 'منصة ذكاء اصطناعي متقدمة لمعالجة البيانات وتحليلها',
    category: 'ai',
    imageUrl: 'https://bookface-images.s3.amazonaws.com/small_logos/6b2774c0442b4c923fff05f20dbced23d34ad02f.png',
    website: 'https://zeroentropy.dev',
    github: 'https://github.com/zeroentropy-ai',
    docs: 'https://docs.zeroentropy.dev/introduction',
    tags: ['AI', 'Data Processing', 'Machine Learning'],
    featured: true,
    createdAt: '2024-02-20',
    founder: 'Ghita Houir Alami',
    founderAr: 'غيثة الحوير العلمي',
    backedByYc: true
  },
  {
    id: '2',
    title: 'Go 212',
    titleAr: 'غو 212',
    description: 'Innovative technology solutions and digital transformation platform for Moroccan businesses',
    descriptionAr: 'منصة مبتكرة للحلول التقنية والتحول الرقمي للشركات المغربية',
    category: 'tech',
    imageUrl: 'https://www.siliconvalley.ma/wp-content/uploads/2026/02/go212.jpg',
    website: 'https://www.go212.ma/',
    instagram: 'https://www.instagram.com/go212_maroc?igsh=MWR2aTk1Zjl5a290Mg%3D%3D',
    tags: ['logistics', 'E-bikes'],
    featured: true,
    createdAt: '2024-04-15',
    founder: 'Omar Mennani',
    founderAr: 'عمر مناني'
  },
  {
    id: '3',
    title: 'SOWIT',
    titleAr: 'سويت',
    description: 'Agricultural technology platform connecting farmers with sustainable solutions and markets',
    descriptionAr: 'منصة تكنولوجيا زراعية تربط المزارعين بالحلول المستدامة والأسواق',
    category: 'tech',
    imageUrl: '/sowit-logo.png',
    website: 'https://sowit.co/fr/',
    linkedin: 'https://www.linkedin.com/company/sowit/?originalSubdomain=fr',
    tags: ['Agritech'],
    featured: true,
    createdAt: '2024-03-25',
    founder: 'Hamza Bendahou',
    founderAr: 'حمزة بندهو'
  }
];
