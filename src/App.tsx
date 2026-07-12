/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  ShoppingCart, 
  ShieldCheck, 
  Zap, 
  Clock, 
  RefreshCw, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Search,
  Filter,
  MessageSquare,
  Instagram,
  Youtube,
  Menu,
  X,
  Star,
  ArrowLeft,
  Lock,
  QrCode,
  CreditCard,
  ReceiptText,
  User,
  Smartphone,
  Monitor,
  Infinity,
  TrendingUp,
  Users,
  AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Routes, Route, Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import freestyleImage from './assets/painel-freestyle.png';
import headtrickImage from './assets/painel-headtrick.png';
import externalImage from './assets/painel-external.png';
import fluoriteImage from './assets/painel-fluorite.png';
import internalImage from './assets/painel-internal.png';
import ffh4xIphoneImage from './assets/painel-ffh4x-iphone.png';
import hsProxyAndroidImage from './assets/painel-hs-proxy-android.png';
import injetorXitImage from './assets/painel-injetor-xit.png';
import feedbackImage1 from './assets/feedback-1.png';
import feedbackImage2 from './assets/feedback-2.png';

const heroYoutubeVideoUrl = 'https://www.youtube.com/embed/k6MJbS7bNxE?controls=1&disablekb=0&modestbranding=1&rel=0&autoplay=0&mute=0&playsinline=1&iv_load_policy=3&vq=hd1080';
const productYoutubeVideoUrl = 'https://www.youtube.com/embed/lbD7ET65fJ0?controls=1&disablekb=0&modestbranding=1&rel=0&autoplay=0&mute=0&playsinline=1&iv_load_policy=3&vq=hd1080';
const headtrickYoutubeVideoUrl = 'https://www.youtube.com/embed/K8AHyDBq3nY?start=2&controls=1&disablekb=0&modestbranding=1&rel=0&autoplay=0&mute=0&playsinline=1&iv_load_policy=3&vq=hd1080';
const externalYoutubeVideoUrl = 'https://www.youtube.com/embed/lBYpZNKDgyw?controls=1&disablekb=0&modestbranding=1&rel=0&autoplay=0&mute=0&playsinline=1&iv_load_policy=3&vq=hd1080';
const emulatorYoutubeVideoUrl = 'https://www.youtube.com/embed/KvIZW1ApwtY?controls=1&disablekb=0&modestbranding=1&rel=0&autoplay=0&mute=0&playsinline=1&iv_load_policy=3&vq=hd1080';
const ffh4xIphoneYoutubeVideoUrl = 'https://www.youtube.com/embed/-wOoJMLEGcY?controls=1&disablekb=0&modestbranding=1&rel=0&autoplay=0&mute=0&playsinline=1&iv_load_policy=3&vq=hd1080';
const hsProxyAndroidYoutubeVideoUrl = 'https://www.youtube.com/embed/k7bj73eF6DM?controls=1&disablekb=0&modestbranding=1&rel=0&autoplay=0&mute=0&playsinline=1&iv_load_policy=3&vq=hd1080';
const injetorXitYoutubeVideoUrl = 'https://www.youtube.com/embed/J_s6y68YRic?controls=1&disablekb=0&modestbranding=1&rel=0&autoplay=0&mute=0&playsinline=1&iv_load_policy=3&vq=hd1080';

// --- Types ---

interface Plan {
  name: string;
  price: number;
  discount: string;
  url: string;
  popular?: boolean;
}

interface Product {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
  tag?: string;
  features: string[];
  plans?: Plan[];
  videoUrl?: string;
  videoWatchUrl?: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

// --- Mock Data ---

const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Painel Freestyle',
    description: 'Painel completo com recursos avançados de freestyle para elevar seu jogo ao próximo nível.',
    longDescription: 'Painel completo com recursos avançados de freestyle para elevar seu jogo ao próximo nível. Desenvolvido com tecnologia de ponta para garantir a melhor performance e segurança.',
    price: 24.90,
    oldPrice: 89.90,
    image: freestyleImage,
    videoUrl: productYoutubeVideoUrl,
    category: 'ANDROID',
    tag: 'MAIS VENDIDO',
    features: [
      'Gelo invertido',
      'Auxílio avançado',
      'Botão trick avançado',
      'Sistema IA para ajudar na sua mira',
      'Otimização no jogo de forma avançada',
      '100% Antiban e antiblacklist',
      'Funciona em todas as versões do android',
      'Funciona em sistema android'
    ],
    plans: [
      { name: '30 Dias', price: 24.90, discount: '-65%', url: 'https://entregador.store/c/freestyle1', popular: true },
      { name: 'Permanente', price: 42.90, discount: '-50%', url: 'https://entregador.store/c/freestyle2' }
    ]
  },
  {
    id: '3',
    name: 'Painel Headtrick',
    description: 'Painel exclusivo para Android com recursos de headtrick para dominar as partidas.',
    longDescription: 'O Painel Headtrick oferece a precisão que você precisa para dominar as partidas com recursos exclusivos de headtrick e calibração de mira avançada.',
    price: 29.99,
    oldPrice: 99.90,
    image: headtrickImage,
    videoUrl: headtrickYoutubeVideoUrl,
    category: 'ANDROID',
    tag: 'NOVIDADE',
    features: [
      'Auxílio avançado',
      'Calibração de mira',
      'Otimização em jogo embutido',
      'Melhoria de mira',
      '100% Antiban e Antiblacklist',
      'Funciona em todas versões do android',
      'Funciona em sistema android'
    ],
    plans: [
      { name: 'Permanente', price: 19.99, discount: '-50%', url: 'https://entregador.store/c/headtrick1', popular: true }
    ]
  },
  {
    id: '4',
    name: 'Painel External',
    description: 'Painel script externo exclusivo para iOS com recursos avançados de Aimbot e configurações personalizáveis.',
    longDescription: 'O Painel External oferece uma solução de script externo exclusiva para iOS, com recursos avançados de Aimbot e ESP, garantindo a máxima performance e segurança sem necessidade de jailbreak complexo.',
    price: 29.99,
    oldPrice: 129.90,
    image: externalImage,
    videoUrl: externalYoutubeVideoUrl,
    category: 'IOS',
    features: [
      'Aimbot 100% e Aimbot Neck',
      'ESP Linha, caixa, vida e nome',
      'Calibração avançada',
      '100% Antiban e Antiblacklist'
    ],
    plans: [
      { name: 'Permanente', price: 29.99, discount: '-77%', url: 'https://entregador.store/c/scriptable1', popular: true }
    ]
  },
  {
    id: '5',
    name: 'Painel FFH4X IPHONE',
    description: 'O clássico FFH4X agora otimizado para iPhone.',
    longDescription: 'O lendário FFH4X chega ao iPhone com toda a sua potência e facilidade de uso.',
    price: 89.90,
    oldPrice: 149.90,
    image: ffh4xIphoneImage,
    videoUrl: ffh4xIphoneYoutubeVideoUrl,
    category: 'IOS',
    tag: 'PREMIUM',
    features: [
      'Aimbot Rage e Aimbot Legit (Ambos 100% HS)',
      'Aim FOV configuravel 360°',
      'ESP linha, caixa, vida e nome',
      'No Recoil 100%'
    ],
    plans: [
      { name: '1 Dia', price: 19.99, discount: '-85%', url: 'https://entregador.store/c/ffh4x1' },
      { name: '7 Dias', price: 29.99, discount: '-75%', url: 'https://entregador.store/c/ffh4x2' },
      { name: '30 Dias', price: 49.99, discount: '-65%', url: 'https://entregador.store/c/ffh4x3', popular: true }
    ]
  },
  {
    id: '6',
    name: 'PAINEL INTERNAL',
    description: 'Painel interno completo para emuladores com recursos premium e máxima performance.',
    longDescription: 'O PAINEL INTERNAL oferece uma solução completa para emuladores, com recursos premium de Aimbot e ESP, garantindo a máxima performance e segurança.',
    price: 36.90,
    oldPrice: 249.90,
    image: internalImage,
    videoUrl: emulatorYoutubeVideoUrl,
    category: 'EMULADOR',
    tag: 'ELITE',
    features: [
      'Aimbot 100% e Aimbot Neck',
      'ESP Linha, caixa, vida e nome',
      'Calibração avançada',
      '100% Antiban e Antiblacklist'
    ],
    plans: [
      { name: '3 Dias', price: 12.90, discount: '-90%', url: 'https://entregador.store/c/emulador1' },
      { name: '7 Dias', price: 24.90, discount: '-80%', url: 'https://entregador.store/c/emulador2' },
      { name: '30 Dias', price: 36.90, discount: '-70%', url: 'https://entregador.store/c/emulador3', popular: true },
      { name: 'Permanente', price: 99.99, discount: '-40%', url: 'https://entregador.store/c/emulador4' }
    ]
  },
  {
    id: '8',
    name: 'INJETOR DE XIT',
    description: 'Injetor de xit para Android com instalação rápida e compatibilidade ampla.',
    longDescription: 'O INJETOR DE XIT para Android permite injetar modificações de forma prática e segura, com suporte contínuo e atualizações frequentes.',
    price: 32.90,
    image: injetorXitImage,
    videoUrl: injetorXitYoutubeVideoUrl,
    videoWatchUrl: 'https://www.youtube.com/watch?v=J_s6y68YRic',
    category: 'ANDROID',
    tag: 'NOVO',
    features: [
      '100% Capa',
      'Escolha um XIT de sua preferência',
      'Vem holograma',
      'Melhora sua sensibilidade',
      'Melhora sua mira',
      '100% Antiban e antiblacklist',
      'BYPASS'
    ],
    plans: [
      { name: 'Permanente', price: 32.90, discount: '-40%', url: 'https://entregador.store/c/injetor1', popular: true }
    ]
  },
  {
    id: '9',
    name: 'INJETOR DE XIT',
    description: 'Injetor de xit para iOS com instalação simplificada e máxima compatibilidade.',
    longDescription: 'O INJETOR DE XIT para iOS oferece uma solução prática para injetar modificações no iPhone, com processo simplificado e suporte completo.',
    price: 32.90,
    image: injetorXitImage,
    videoUrl: injetorXitYoutubeVideoUrl,
    videoWatchUrl: 'https://www.youtube.com/watch?v=J_s6y68YRic',
    category: 'IOS',
    tag: 'NOVO',
    features: [
      '100% Capa',
      'Escolha um XIT de sua preferência',
      'Vem holograma',
      'Melhora sua sensibilidade',
      'Melhora sua mira',
      '100% Antiban e antiblacklist',
      'BYPASS'
    ],
    plans: [
      { name: 'Permanente', price: 32.90, discount: '-40%', url: 'https://entregador.store/c/injetor1', popular: true }
    ]
  },
  {
    id: '10',
    name: 'HS PROXY ANDROID',
    description: 'Proxy de HS para Android com múltiplas opções de headshot e holograma incluso.',
    longDescription: 'O HS PROXY ANDROID oferece configurações avançadas de headshot para Android, com opções de cabeça, pescoço e peito, além de holograma incluso.',
    price: 29.99,
    image: hsProxyAndroidImage,
    videoUrl: hsProxyAndroidYoutubeVideoUrl,
    videoWatchUrl: 'https://www.youtube.com/watch?v=k7bj73eF6DM',
    category: 'ANDROID',
    tag: 'NOVO',
    features: [
      '100% HS',
      'HS CABEÇA',
      'HS PESCOÇO',
      'HS PEITO',
      'VEM COM HOLOGRAMA'
    ],
    plans: [
      { name: 'Permanente', price: 29.99, discount: '-40%', url: 'https://entregador.store/c/proxy', popular: true }
    ]
  },
  {
    id: '11',
    name: 'PAINEL FLUORITE',
    description: 'Painel exclusivo para iOS com recursos avançados e máxima performance.',
    longDescription: 'O PAINEL FLUORITE oferece uma solução completa para iPhone, com recursos avançados de Aimbot e ESP, garantindo a máxima performance e segurança.',
    price: 49.99,
    image: fluoriteImage,
    category: 'IOS',
    tag: 'NOVO',
    features: [
      'Aimbot 100%',
      'Aimlock 100%',
      'Aimfov 100%',
      'No-Recoil 100%',
      'ESP (Line,Box,Name,Life)',
      'AimPrecision',
      'Headtrick',
      '+6 Bonus'
    ],
    plans: [
      { name: '1 Dia', price: 19.99, discount: '-85%', url: 'https://entregador.store/c/fluorite1' },
      { name: '7 Dias', price: 29.99, discount: '-75%', url: 'https://entregador.store/c/fluorite2' },
      { name: '30 Dias', price: 49.99, discount: '-65%', url: 'https://entregador.store/c/fluorite3', popular: true }
    ]
  }
];

const FAQS: FAQItem[] = [
  {
    question: 'Como recebo o produto após a compra?',
    answer: 'A entrega é imediata! Assim que o pagamento for confirmado, você receberá um e-mail com os dados de acesso e o link para download.'
  },
  {
    question: 'O painel é seguro contra banimento?',
    answer: 'Sim! Nossos painéis contam com a tecnologia Anti-Ban mais avançada do mercado, garantindo 100% de segurança para sua conta principal.'
  },
  {
    question: 'Funciona em quais dispositivos?',
    answer: 'Temos versões compatíveis com Android (Mobile) e também para Emuladores de PC.'
  },
  {
    question: 'Como funciona o suporte?',
    answer: 'Oferecemos suporte 24 horas por dia, 7 dias por semana, através do nosso WhatsApp e Discord oficial.'
  }
];

// --- Components ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const SalesTriggers = () => {
  const [notification, setNotification] = useState<{ text: string; icon: React.ReactNode } | null>(null);
  const products = ['ANDROID VIP', 'IOS PREMIUM', 'EMULADOR PRO', 'REGEDIT MOBILE'];
  const names = ['João', 'Marcos', 'Felipe', 'Lucas', 'Gabriel', 'Mateus', 'Rafael', 'Bruno'];

  useEffect(() => {
    const showNotification = () => {
      const type = Math.random() > 0.5 ? 'sale' : 'urgency';
      let text = '';
      let icon: React.ReactNode = null;

      if (type === 'sale') {
        const name = names[Math.floor(Math.random() * names.length)];
        const product = products[Math.floor(Math.random() * products.length)];
        text = `${name} acabou de adquirir ${product}`;
        icon = <ShoppingCart size={16} className="text-purple-600" />;
      } else {
        const count = Math.floor(Math.random() * 5) + 2;
        text = `Apenas ${count} vagas restantes para o plano Vitalício!`;
        icon = <AlertCircle size={16} className="text-purple-600" />;
      }

      setNotification({ text, icon });
      setTimeout(() => setNotification(null), 5000);
    };

    const interval = setInterval(() => {
      if (Math.random() > 0.7) showNotification();
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {notification && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:bottom-6 z-[100] bg-zinc-900/95 backdrop-blur-md border border-white/10 p-3 md:p-4 rounded-2xl shadow-2xl flex items-center gap-3 max-w-none md:max-w-xs"
        >
          <div className="w-8 h-8 bg-purple-600/20 rounded-full flex items-center justify-center shrink-0">
            {notification.icon}
          </div>
          <p className="text-[10px] md:text-sm font-bold text-white leading-tight">{notification.text}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const UrgencyBanner = () => {
  const [timeLeft, setTimeLeft] = useState(3600 * 2 + 45 * 60); // 2h 45m

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-purple-600 py-1.5 md:py-2 text-center overflow-hidden w-full">
      <div className="flex items-center justify-center gap-2 md:gap-4 animate-pulse">
        <span className="text-[9px] md:text-xs font-black text-white uppercase tracking-widest flex items-center gap-1.5 md:gap-2">
          <Clock size={12} className="md:w-3.5 md:h-3.5" />
          OFERTA POR TEMPO LIMITADO: {formatTime(timeLeft)}
        </span>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeClick = (e: React.MouseEvent) => {
    setIsMobileMenuOpen(false);
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`w-full transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-3 border-b border-white/10' : 'bg-black/40 backdrop-blur-sm py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={handleHomeClick}>
          <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(147,51,234,0.5)]">
            <Zap className="text-white fill-white" size={24} />
          </div>
          <span className="text-xl font-black tracking-tighter text-white">HiagoXiter<span className="text-purple-600">STORE</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/" onClick={handleHomeClick} className="text-sm font-medium text-white/70 hover:text-white transition-colors">ÍNICIO</Link>
          <a href="/#produtos" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Produtos</a>
          <a href="/#vantagens" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Vantagens</a>
          <a href="/#faq" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Dúvidas</a>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-900 border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-2">
              <Link to="/" className="text-lg font-black text-white hover:text-purple-600 p-3 rounded-xl hover:bg-white/5 transition-all uppercase tracking-tight" onClick={handleHomeClick}>ÍNICIO</Link>
              <a href="/#produtos" className="text-lg font-black text-white hover:text-purple-600 p-3 rounded-xl hover:bg-white/5 transition-all uppercase tracking-tight" onClick={() => setIsMobileMenuOpen(false)}>Produtos</a>
              <a href="/#vantagens" className="text-lg font-black text-white hover:text-purple-600 p-3 rounded-xl hover:bg-white/5 transition-all uppercase tracking-tight" onClick={() => setIsMobileMenuOpen(false)}>Vantagens</a>
              <a href="/#faq" className="text-lg font-black text-white hover:text-purple-600 p-3 rounded-xl hover:bg-white/5 transition-all uppercase tracking-tight" onClick={() => setIsMobileMenuOpen(false)}>Dúvidas</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <UrgencyBanner />
      <Navbar />
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-30 pb-10 md:pt-44 md:pb-18 overflow-hidden min-h-[52vh] md:min-h-[76vh] flex items-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-5 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[1000px] h-[400px] md:h-[600px] bg-purple-600/10 rounded-full blur-[80px] md:blur-[120px] opacity-20" />
      </div>
      
      <div className="w-full mx-auto px-2 md:px-4 text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <div className="bg-purple-600/20 backdrop-blur-md border border-purple-600/30 px-4 py-2 rounded-full flex items-center gap-2">
              <ShieldCheck size={16} className="text-purple-600" />
              <span className="text-[10px] font-black text-white uppercase tracking-widest">Apresentação Oficial da Loja</span>
            </div>
          </div>
          
          <div className="max-w-[91vw] mx-auto rounded-2xl md:rounded-[40px] overflow-hidden border border-white/10 shadow-2xl shadow-purple-600/30 aspect-video bg-black/40 backdrop-blur-sm relative">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={heroYoutubeVideoUrl}
              title="Vídeo de Apresentação"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    { icon: <ShieldCheck size={32} />, title: '100% SEGURO', desc: 'Sistema anti-ban de última geração para sua total segurança.' },
    { icon: <Zap size={32} />, title: 'ENTREGA INSTANTÂNEA', desc: 'Receba seus dados de acesso imediatamente após a compra.' },
    { icon: <Clock size={32} />, title: '24/H', desc: 'Suporte Online' },
    { icon: <RefreshCw size={32} />, title: 'ATUALIZAÇÕES GRÁTIS', desc: 'Mantenha-se sempre atualizado com as novas versões do jogo.' }
  ];

  return (
    <section id="vantagens" className="py-14 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <div key={i} className="p-5 md:p-6 rounded-[2.5rem] bg-zinc-900/50 border border-white/5 hover:border-purple-600/30 transition-all group">
              <div className="w-16 h-16 bg-purple-600/10 rounded-2xl flex items-center justify-center text-purple-600 mb-4 group-hover:bg-purple-600 group-hover:text-white transition-all">
                {f.icon}
              </div>
              <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tight">{f.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="bg-zinc-900/50 border border-white/5 rounded-[2.5rem] overflow-hidden group hover:border-purple-600/30 transition-all flex flex-col">
      <div className="relative id-product-media-container aspect-square overflow-hidden bg-black group/media">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none" />
        
        {product.tag && (
          <div className="absolute top-4 left-4 bg-purple-600 text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-lg z-20">
            {product.tag}
          </div>
        )}

        <div className="absolute top-4 right-4 z-20">
          <div className="bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[9px] font-black text-white uppercase tracking-widest">Alta Demanda</span>
          </div>
        </div>
        
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-purple-600/20 backdrop-blur-md border border-purple-600/30 px-2 py-1 rounded-md">
              <span className="text-[10px] font-black text-purple-600 uppercase tracking-widest">{product.category}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-5 md:p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tight group-hover:text-purple-600 transition-colors">{product.name}</h3>
        
        <div className="mt-auto">
          <Link 
            to={`/produtos/${product.id}`}
            className="block w-full bg-purple-600 hover:bg-purple-700 text-white py-3.5 rounded-2xl font-black text-center transition-all shadow-lg hover:shadow-purple-600/20"
          >
            ADQUIRIR AGORA
          </Link>
        </div>
      </div>
    </div>
  );
};

const ProductGrid = () => {
  const [filter, setFilter] = useState('TODOS');
  const categories = ['TODOS', 'ANDROID', 'IOS', 'EMULADOR'];
  
  const filteredProducts = filter === 'TODOS' 
    ? PRODUCTS.map((p, i) => i === 0 ? { ...p, tag: 'MAIS VENDIDO' } : p) 
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <section id="produtos" className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter uppercase">NOSSOS PRODUTOS</h2>
          <p className="text-white/50 max-w-xl">Escolha a ferramenta ideal para o seu estilo de jogo e comece a dominar hoje mesmo.</p>
        </div>
        
        <div className="mb-8">
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`w-full sm:w-auto px-6 py-3 rounded-full text-xs font-black transition-all border ${filter === cat ? 'bg-purple-600 border-purple-600 text-white shadow-lg shadow-purple-600/20' : 'bg-transparent border-white/10 text-white/50 hover:border-white/30'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter uppercase">DÚVIDAS FREQUENTES</h2>
          <p className="text-white/50">Tudo o que você precisa saber antes de adquirir seu acesso.</p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-zinc-900/50 border border-white/5 rounded-3xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-5 md:p-6 flex items-center justify-between text-left group"
              >
                <span className="text-lg font-black text-white uppercase tracking-tight group-hover:text-purple-600 transition-colors">{faq.question}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${openIndex === i ? 'bg-purple-600 text-white rotate-180' : 'bg-white/5 text-white/30'}`}>
                  <ChevronDown size={20} />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-white/50 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <footer className="bg-black pt-14 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-4 flex flex-col items-center text-center">
            <div className="flex items-center gap-2 mb-6 cursor-pointer" onClick={handleHomeClick}>
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(147,51,234,0.5)]">
                <Zap className="text-white fill-white" size={24} />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white uppercase">HiagoXiter<span className="text-purple-600">STORE</span></span>
            </div>
            <p className="text-white/40 max-w-sm mb-6 leading-relaxed">
              A maior e melhor loja de ferramentas para Free Fire do Brasil. 
              Qualidade, segurança e o melhor preço do mercado.
            </p>
          </div>
        </div>
        
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs font-bold uppercase tracking-widest">
            © 2024 HiagoXiter STORE. TODOS OS DIREITOS RESERVADOS.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 grayscale opacity-30">
              <ShieldCheck size={16} className="text-white" />
              <span className="text-[10px] font-black text-white uppercase tracking-widest">Site Seguro</span>
            </div>
            <div className="flex items-center gap-2 grayscale opacity-30">
              <Zap size={16} className="text-white" />
              <span className="text-[10px] font-black text-white uppercase tracking-widest">Entrega Imediata</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FeedbacksSection = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const feedbacks = [feedbackImage1, feedbackImage2];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-14 bg-black overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-black text-green-500 uppercase tracking-widest">Feedbacks em Tempo Real</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter">FEEDBACKS VERÍDICOS</h2>
          <p className="text-white/50">Veja os prints reais de quem já adquiriu e aprovou nosso produto.</p>
        </div>

        <div className="relative group/carousel">
          {/* Navigation Arrows - Sides */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 z-30 w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-purple-600 hover:border-purple-600 transition-all active:scale-90 opacity-0 group-hover/carousel:opacity-100 md:opacity-100"
            aria-label="Anterior"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 z-30 w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-purple-600 hover:border-purple-600 transition-all active:scale-90 opacity-0 group-hover/carousel:opacity-100 md:opacity-100"
            aria-label="Próximo"
          >
            <ChevronRight size={24} />
          </button>

          <div 
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-5 w-full"
          >
            {feedbacks.map((feedback, index) => (
              <div key={index} className="min-w-[280px] md:min-w-[300px] aspect-[9/16] bg-zinc-900 rounded-3xl overflow-hidden border border-white/5 group relative cursor-zoom-in snap-start">
                <img src={feedback} alt={`Feedback ${index + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-3 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-[10px] font-bold">G</div>
                    <span className="text-white text-[10px] font-bold">Cliente Verificado</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => (
  <>
    <Hero />
    <Features />
    
    {/* Stats Section */}
    <section className="py-8 bg-purple-600">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-black text-white mb-1">10k+</div>
            <div className="text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-widest">Clientes Satisfeitos</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-black text-white mb-1">100%</div>
            <div className="text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-widest">Seguro & Anti-Ban</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-black text-white mb-1">24/H</div>
            <div className="text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-widest">Suporte Online</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-black text-white mb-1">5★</div>
            <div className="text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-widest">Avaliação Média</div>
          </div>
        </div>
      </div>
    </section>

    <ProductGrid />

    <FeedbacksSection />

    <FAQ />


  </>
);

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white p-6">
        <h2 className="text-4xl font-black mb-4">Produto não encontrado</h2>
        <button onClick={() => navigate('/')} className="bg-purple-600 px-6 py-3 rounded-xl font-bold">Voltar ao Início</button>
      </div>
    );
  }

  const defaultPlans = [
    { name: '7 Dias', price: product.price * 0.4, discount: '-30%', url: '#' },
    { name: '15 Dias', price: product.price * 0.7, discount: '-50%', url: '#' },
    { name: '30 Dias', price: product.price, discount: '-65%', url: '#', popular: true },
    { name: 'Permanente', price: product.price * 3, discount: '-50%', url: '#' }
  ];

  const plans = product.plans || defaultPlans;
  const hasYoutubeVideo = Boolean(product.videoUrl?.includes('youtube.com'));

  return (
    <div className="pt-34 md:pt-44 pb-14">
      <div className="max-w-7xl mx-auto px-6">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-white/50 hover:text-white mb-6 md:mb-8 transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Voltar
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          {/* Product Info */}
          <div className="space-y-6">
            <div className="relative rounded-[3rem] overflow-hidden border border-white/10 aspect-square group bg-black">
              {product.videoUrl ? (
                hasYoutubeVideo ? (
                  <div className="absolute inset-0 overflow-hidden">
                    <iframe 
                      className="absolute inset-0 w-full h-full z-0"
                      src={product.videoUrl} 
                      title={product.name}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <video 
                    controls
                    playsInline
                    poster={product.image}
                    className="w-full h-full object-cover"
                  >
                    <source src={product.videoUrl} type="video/mp4" />
                    Seu navegador não suporta vídeos.
                  </video>
                )
              ) : (
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              {product.tag && (
                <div className="absolute top-6 left-6 bg-purple-600 text-white text-xs font-black px-4 py-2 rounded-full shadow-lg shadow-purple-600/20">
                  {product.tag}
                </div>
              )}
            </div>

            {hasYoutubeVideo && product.videoWatchUrl && (
              <a
                href={product.videoWatchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-2xl font-black text-sm transition-all shadow-lg hover:shadow-purple-600/20"
              >
                ABRIR VIDEO COM SOM
              </a>
            )}
            
            <div>
              <h1 className="text-4xl md:text-7xl font-black text-white mb-4 leading-[0.9] uppercase tracking-tighter">{product.name}</h1>
              <p className="text-white/50 text-lg md:text-xl font-medium max-w-xl mb-8 leading-relaxed">
                {product.description}
              </p>
              
              {product.features && product.features.length > 0 && (
                <div className="mt-8 bg-zinc-900/50 border border-white/5 rounded-[2.5rem] p-6 md:p-8 backdrop-blur-sm">
                  <h3 className="text-xl font-black text-white mb-6 uppercase tracking-tight flex items-center gap-3">
                    <CheckCircle2 className="text-purple-600" />
                    Características
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 text-white/70 text-sm font-bold group">
                        <div className="w-2 h-2 rounded-full bg-purple-600 shadow-[0_0_8px_rgba(147,51,234,0.5)] group-hover:scale-125 transition-transform" />
                        <span className="group-hover:text-white transition-colors">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Plans & Checkout */}
          <div className="space-y-6">
            <div className="bg-zinc-900 border border-white/10 rounded-[3rem] p-6 md:p-8 shadow-2xl">
              <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                <ShoppingCart className="text-purple-600" />
                ESCOLHA SEU PLANO
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {plans.map((plan, i) => (
                  <div 
                    key={i} 
                    className={`relative p-6 rounded-3xl border transition-all cursor-pointer group flex flex-col justify-between ${plan.popular ? 'bg-purple-600 border-purple-500 shadow-lg shadow-purple-600/20' : 'bg-white/5 border-white/5 hover:border-purple-600/30'}`}
                    onClick={() => window.open(plan.url, '_blank')}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-purple-600 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                        MAIS POPULAR
                      </div>
                    )}
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <span className={`text-sm font-bold ${plan.popular ? 'text-white' : 'text-white/50'}`}>{plan.name}</span>
                        <span className={`text-[10px] font-black px-2 py-0.5 rounded-md ${plan.popular ? 'bg-white text-purple-600' : 'bg-purple-600 text-white'}`}>
                          {plan.discount}
                        </span>
                      </div>
                      <div className="text-3xl font-black text-white">R$ {plan.price.toFixed(2)}</div>
                    </div>
                    <button className={`w-full mt-4 py-3 rounded-xl font-black text-sm transition-all ${plan.popular ? 'bg-white text-purple-600 hover:bg-zinc-100' : 'bg-purple-600 text-white hover:bg-purple-700'}`}>
                      ADQUIRIR AGORA
                    </button>
                  </div>
                ))}
              </div>

              {/* Sales Triggers in Checkout */}
              <div className="space-y-3 pt-5 border-t border-white/5">
                <div className="flex items-center gap-3 text-white/40 text-xs font-bold uppercase tracking-widest">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span>14 pessoas visualizando este produto agora</span>
                </div>
                <div className="flex items-center gap-3 text-white/40 text-xs font-bold uppercase tracking-widest">
                  <ShieldCheck size={16} className="text-purple-600" />
                  <span>Garantia incondicional de 7 dias</span>
                </div>
                <div className="flex items-center gap-3 text-white/40 text-xs font-bold uppercase tracking-widest">
                  <Zap size={16} className="text-purple-600" />
                  <span>Entrega imediata via E-mail/WhatsApp</span>
                </div>
              </div>
            </div>

            {/* Security Badge */}
            <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3">
                <Lock size={20} className="text-purple-600" />
                <div>
                  <div className="text-white text-xs font-black uppercase tracking-widest">Pagamento Seguro</div>
                  <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Criptografia de ponta a ponta</div>
                </div>
              </div>
              <div className="flex items-center gap-2 self-start sm:self-auto">
                <div className="w-14 h-10 rounded-xl border border-white/10 bg-white/5 flex flex-col items-center justify-center gap-0.5">
                  <QrCode size={14} className="text-emerald-400" />
                  <span className="text-[8px] font-black text-white uppercase tracking-wider">Pix</span>
                </div>
                <div className="w-14 h-10 rounded-xl border border-white/10 bg-white/5 flex flex-col items-center justify-center gap-0.5">
                  <CreditCard size={14} className="text-sky-400" />
                  <span className="text-[8px] font-black text-white uppercase tracking-wider">Cartao</span>
                </div>
                <div className="w-14 h-10 rounded-xl border border-white/10 bg-white/5 flex flex-col items-center justify-center gap-0.5">
                  <ReceiptText size={14} className="text-amber-400" />
                  <span className="text-[8px] font-black text-white uppercase tracking-wider">Boleto</span>
                </div>
              </div>
            </div>
          </div>
        </div>




      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-black selection:bg-purple-600 selection:text-white overflow-x-hidden">
      <ScrollToTop />
      <Header />
      <SalesTriggers />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/produtos/:id" element={<ProductDetailsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
