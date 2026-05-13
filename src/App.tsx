import { 
  Home, 
  Smartphone, 
  QrCode, 
  History, 
  Settings,
  Search,
  ChevronDown,
  Phone,
  Verified,
  User as UserIcon,
  LogOut,
  Bell,
  MoreVertical,
  Calendar,
  Sparkles,
  MapPin,
  GraduationCap,
  Mail,
  Info as InfoIcon,
  BadgeCheck,
  Circle,
  ShieldCheck,
  ChevronRight,
  ArrowLeft,
  Flashlight,
  Image as ImageIcon,
  X,
  Lock,
  Eye,
  EyeOff,
  Church,
  Nfc,
  ArrowRight,
  Fingerprint,
  Maximize,
  Clock,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

// --- Shared Components ---

const BottomNav = ({ activeTab, onTabChange }: { activeTab: string, onTabChange: (tab: string) => void }) => {
  const tabs = [
    { id: 'home', label: 'Trang chủ', icon: Home, color: 'bg-primary' },
    { id: 'nfc', label: 'NFC', icon: Nfc, color: 'bg-secondary' },
    { id: 'scan', label: 'Quét QR', icon: QrCode, color: 'bg-secondary' },
    { id: 'history', label: 'Lịch sử', icon: History, color: 'bg-tertiary' },
    { id: 'settings', label: 'Cài đặt', icon: Settings, color: 'bg-primary' },
  ];

  return (
    <nav className="absolute bottom-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-t border-gray-100 flex justify-around items-center px-2 pb-8 pt-3 h-24 rounded-t-[32px] shadow-[0_-8px_32px_rgba(0,0,0,0.06)]">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center justify-center transition-all duration-500 rounded-[20px] ${
              isActive 
                ? `${tab.color} text-white px-5 py-2 shadow-lg shadow-black/10 -translate-y-1` 
                : 'text-gray-400 px-3 py-1 hover:text-primary transition-colors'
            }`}
          >
            <tab.icon className={`${isActive ? 'w-5 h-5' : 'w-6 h-6 mb-1'}`} />
            <span className={`text-[10px] font-black uppercase tracking-wider ${isActive ? 'mt-0.5' : ''}`}>
              {tab.label}
            </span>
            {isActive && (
              <motion.div 
                layoutId="activePill"
                className="absolute inset-0 rounded-[20px] ring-4 ring-white/20"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        );
      })}
    </nav>
  );
};

// --- Screens ---

const LaymanHomeScreen = ({ onPriestClick, onLoginClick }: { onPriestClick: () => void, onLoginClick: () => void }) => {
  return (
    <div className="flex flex-col gap-6 p-4 pb-32 overflow-x-hidden">
      <header className="flex justify-between items-center bg-white/90 backdrop-blur-md sticky top-0 z-40 -mx-4 px-4 py-3 border-b border-gray-50 shadow-sm">
        <div className="flex items-center gap-3">
           <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
             <Home className="w-5 h-5 text-white" />
           </div>
           <div>
              <h1 className="text-lg font-display font-extrabold text-primary leading-none">Thông tin linh mục</h1>
           </div>
        </div>
        <button 
          onClick={onLoginClick}
          className="flex items-center gap-2 px-3 py-1.5 border border-outline-variant rounded-full text-primary font-bold text-xs"
        >
           <LogOut className="w-4 h-4 rotate-180" />
           Đăng nhập
        </button>
      </header>

      <section className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-50">
         <h2 className="text-lg font-display font-extrabold mb-4">Tìm kiếm linh mục</h2>
         <div className="space-y-3">
            <div className="relative">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
               <input 
                type="text" 
                placeholder="Nhập tên linh mục" 
                className="w-full bg-surface-container-low rounded-2xl py-3.5 pl-11 pr-4 outline-none font-medium text-sm text-on-surface"
               />
            </div>
            <div className="relative">
               <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
               <select className="w-full bg-surface-container-low rounded-2xl py-3.5 pl-11 pr-10 outline-none font-medium text-sm text-on-surface appearance-none">
                 <option>Chọn giáo phận</option>
               </select>
               <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
         </div>
      </section>

      <div className="bg-[#FFF1F1] rounded-[32px] p-6 border border-red-50 flex items-center gap-4 relative overflow-hidden">
         <div className="flex-1">
            <p className="text-[10px] font-bold text-red-400 uppercase tracking-widest mb-1 font-display">Dành cho trường hợp khẩn cấp</p>
            <h3 className="text-xl font-display font-extrabold text-red-900 mb-1">Liên hệ xức dầu</h3>
            <p className="text-xs text-red-800/60 font-medium">Tìm linh mục gần nhất để cử hành bí tích</p>
         </div>
         <button className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 shadow-sm relative z-10">
            <Phone className="w-6 h-6 fill-red-600" />
         </button>
         <div className="absolute top-0 right-0 p-4 opacity-[0.03] pointer-events-none">
            <Phone className="w-24 h-24 text-red-900" />
         </div>
      </div>

      <section>
         <div className="flex justify-between items-center mb-4 px-1">
            <h3 className="text-xl font-display font-extrabold">Linh mục tìm nhiều</h3>
            <button className="text-primary text-sm font-bold flex items-center gap-1">
               Xem tất cả <ChevronRight className="w-4 h-4" />
            </button>
         </div>
         
         <div className="space-y-4">
            <div 
              onClick={onPriestClick}
              className="bg-white p-4 rounded-[32px] shadow-sm border border-gray-50 flex gap-4 cursor-pointer"
            >
               <div className="relative">
                  <div className="w-24 h-32 rounded-2xl overflow-hidden bg-gray-100">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGmWxIVRZHVY7sZx9oNTNW9sV-enLy9YHyVPr-YRyTC4Vh6W_vmM2iDr1MD-CjemRbQACN9AAJ89iVpX3iHMBpP4GGL3a6piruosdhoQUUHTRPhlVWaKVNaHF8ANPbA9YUry1cGQS_jKFqI0UTjdy6_aYS5HyPXG40xuBs3O4il6AEKAGcxaeqzev1PRXYCDlSbDyswI3Z2mXxUwu9plX7-SPrJX-fD6vVa4QTxtxUNwB7i5sXy9uVOcmOvi_nqNb7-epUpvMR-K65" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#FFEEDD] text-[#884400] text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap shadow-sm">
                    Sài Gòn
                  </div>
               </div>
               <div className="flex-1 py-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-bold text-primary font-display uppercase tracking-wider mb-0.5">LM. Giuse</p>
                    <h4 className="text-lg font-display font-black">Nguyễn Văn A</h4>
                  </div>
                  <div className="space-y-1.5 mt-2">
                    <div className="flex items-center gap-2 text-[13px] text-gray-500 font-medium">
                        <Church className="w-3.5 h-3.5 text-primary" />
                        <span>Giáo xứ Tân Định</span>
                    </div>
                    <div className="flex items-center gap-2 text-[13px] text-gray-500 font-medium">
                        <Verified className="w-3.5 h-3.5 text-primary" />
                        <span>Cha sở</span>
                    </div>
                  </div>
               </div>
            </div>

            <div className="bg-white p-4 rounded-[32px] shadow-sm border border-gray-50 flex gap-4">
               <div className="relative">
                  <div className="w-24 h-32 rounded-2xl overflow-hidden bg-gray-100">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6TC9vRUUgKI9T11hymO9XUCZRVVb69CUZXLKtVxoIHEuEfhl1s_2yYGFO-mMbl9c7RcVXdttqm3yrTWvxu1emm73FSoTyD7N0ue9KINtZ8ZJKV4QubADC1F3e0EB9k7qkZNyaUAMeYorTNXwrUCaleP8FeQ7Yw8pu-1SpPVTYYsA-eg69xRVA9yvpR8pIKAkvIM-faPi1gAula_lRAhHiyMSjCB3zlhyo1U7zTzWRanI9zZe0kMgK0Kcxs4WBdRcAVEcrZZZl_Gx-" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#E1EFFF] text-[#004AC6] text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap shadow-sm">
                    Hà Nội
                  </div>
               </div>
               <div className="flex-1 py-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-bold text-primary font-display uppercase tracking-wider mb-0.5">LM. Phanxicô Xaviê</p>
                    <h4 className="text-lg font-display font-black">Trần Văn B</h4>
                  </div>
                  <div className="space-y-1.5 mt-2">
                    <div className="flex items-center gap-2 text-[13px] text-gray-500 font-medium">
                        <Church className="w-3.5 h-3.5 text-primary" />
                        <span>Đại chủng viện Thánh Giuse</span>
                    </div>
                    <div className="flex items-center gap-2 text-[13px] text-gray-500 font-medium">
                        <Verified className="w-3.5 h-3.5 text-primary" />
                        <span>Giáo sư</span>
                    </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <section className="bg-surface-container rounded-[40px] p-8 space-y-8 mt-2">
         <div className="flex items-center gap-3">
            <InfoIcon className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-display font-extrabold text-primary">Thông tin cần biết</h3>
         </div>
         <div className="flex gap-4">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
               <ShieldCheck className="w-6 h-6 text-primary fill-primary/10" />
            </div>
            <div className="flex-1">
               <h4 className="font-extrabold text-[15px] mb-1">Dữ liệu chính thức</h4>
               <p className="text-sm text-gray-500 font-medium leading-relaxed">Thông tin được xác thực bởi văn phòng các Giáo phận.</p>
            </div>
         </div>
         <div className="flex gap-4">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
               <Search className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
               <h4 className="font-extrabold text-[15px] mb-1">Hướng dẫn tìm kiếm</h4>
               <p className="text-sm text-gray-500 font-medium leading-relaxed">Sử dụng tên thánh hoặc tên thật để có kết quả chính xác nhất.</p>
            </div>
         </div>
      </section>
    </div>
  );
};

const LoginScreen = ({ onLogin, onBack }: { onLogin: () => void, onBack: () => void }) => {
  return (
    <div className="flex flex-col h-full bg-surface p-6 pt-8 overflow-hidden">
      {/* Icon & Title */}
      <div className="flex flex-col items-center mb-6 shrink-0">
        <div className="w-16 h-16 bg-primary rounded-[20px] flex items-center justify-center shadow-2xl shadow-primary/20 mb-4">
          <Church className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-[28px] font-display font-black text-primary leading-tight">Thông Tin Linh Mục</h1>
        <p className="text-gray-400 font-bold text-xs mt-1">Đăng nhập Linh mục</p>
      </div>

      {/* Form Container */}
      <div className="bg-white rounded-[28px] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50/50 space-y-5 shrink-0">
        <div className="space-y-2">
          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Tên đăng nhập hoặc Email</label>
          <div className="relative group">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-sm">
               <UserIcon className="w-4.5 h-4.5 text-gray-400 group-focus-within:text-primary transition-colors" />
            </div>
            <input 
              type="text" 
              defaultValue="linhmuc@giaophan.org"
              className="w-full bg-[#f8fafc] border-2 border-transparent rounded-[18px] py-3.5 pl-14 pr-4 outline-none font-bold text-on-surface focus:bg-white focus:border-primary/20 transition-all text-sm"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Mật khẩu</label>
          <div className="relative group">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-sm">
               <Lock className="w-4.5 h-4.5 text-gray-400 group-focus-within:text-primary transition-colors" />
            </div>
            <input 
              type="password" 
              defaultValue="password123"
              className="w-full bg-[#f8fafc] border-2 border-transparent rounded-[18px] py-3.5 pl-14 pr-12 outline-none font-bold text-on-surface focus:bg-white focus:border-primary/20 transition-all text-sm font-mono tracking-widest"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
               <Eye className="w-4.5 h-4.5" />
            </button>
          </div>
        </div>

        <div className="flex justify-end pr-1">
          <button className="text-xs font-bold text-primary hover:underline transition-all">Quên mật khẩu?</button>
        </div>

        <button 
          onClick={onLogin}
          className="w-full bg-primary text-white py-4 rounded-[18px] font-black text-base shadow-xl shadow-primary/20 flex items-center justify-center gap-3 active:scale-95 transition-all group"
        >
          Đăng nhập
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Alternative Login */}
      <div className="mt-8 mb-6 space-y-6 flex flex-col items-center shrink-0">
         <div className="relative w-full flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
               <div className="w-full border-t border-gray-100"></div>
            </div>
            <span className="relative px-6 bg-surface text-[9px] font-black text-gray-300 uppercase tracking-[0.2em]">Hoặc sử dụng thẻ tác vụ</span>
         </div>

         <button className="w-full bg-[#D97706] text-white py-4 rounded-[20px] font-black text-sm shadow-xl shadow-orange-100 flex items-center justify-center gap-3 active:scale-95 transition-all">
            <div className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center">
               <Nfc className="w-5 h-5" />
            </div>
            Chạm thẻ Linh mục
         </button>
      </div>

      {/* Footer */}
      <div className="mt-auto flex flex-col items-center gap-3 shrink-0">
         <div className="h-[1px] w-full bg-gray-100/50 mb-1" />
         <p className="text-gray-400 font-bold text-xs">Không phải là Linh mục?</p>
         <button onClick={onBack} className="flex items-center gap-2 text-primary font-bold text-sm group">
            <ChevronRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
            Quay lại Trang chủ Giáo dân
         </button>
      </div>
    </div>
  );
};

const PriestHomeScreen = ({ onLogout, onProfileClick }: { onLogout: () => void, onProfileClick: () => void }) => {
  return (
    <div className="flex flex-col gap-5 p-4 pb-32 bg-[#f8faff]">
      {/* Header */}
      <header className="flex justify-between items-center -mx-4 px-5 py-3 sticky top-0 z-40 bg-[#f8faff]/80 backdrop-blur-md">
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
             <Church className="w-4.5 h-4.5 text-primary" />
           </div>
           <h1 className="text-sm font-display font-black text-primary uppercase tracking-wider">Thông tin Linh mục</h1>
        </div>
        <div className="flex items-center gap-2">
           <button onClick={onLogout} className="text-[10px] font-black text-gray-400 border border-gray-200 px-3 py-1.5 rounded-full hover:border-primary transition-colors">THOÁT</button>
           <button className="w-9 h-9 flex items-center justify-center text-primary relative">
              <Bell className="w-6 h-6" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-[#f8faff]" />
           </button>
        </div>
      </header>

      {/* Priest ID Card - New Design from Image */}
      <div className="bg-gradient-to-br from-[#0ea5e9] to-[#2563eb] rounded-[32px] p-5 shadow-xl shadow-blue-500/20 text-white relative overflow-hidden flex items-center justify-between">
          <div className="flex items-center gap-4 relative z-10">
             <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                <UserIcon className="w-8 h-8 text-blue-500" />
             </div>
             <div>
                <p className="text-[10px] font-black opacity-80 tracking-widest uppercase mb-0.5">Căn cước linh mục</p>
                <h2 className="text-base font-display font-black uppercase leading-tight">LM. PHAOLO</h2>
                <h3 className="text-xl font-display font-black leading-tight">HOÀNG MẠNH HUY</h3>
                <p className="text-[10px] font-bold opacity-70 mt-1 uppercase tracking-wider">Giáo phận Phú Cường</p>
             </div>
          </div>
          <div className="bg-white/20 backdrop-blur-md px-3 py-2 rounded-2xl border border-white/30 flex flex-col items-center gap-0.5">
             <Fingerprint className="w-6 h-6 mb-0.5" />
             <span className="text-[8px] font-black tracking-widest">FACEID</span>
          </div>
          
          {/* Subtle patterns */}
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-white/5 rounded-full" />
      </div>

      {/* Action Bar - New Compact Style from Image */}
      <div className="bg-white rounded-[32px] p-5 shadow-sm border border-gray-100/50 flex justify-between items-center">
         <button className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30">
               <Maximize className="w-6 h-6 text-white" />
            </div>
            <span className="text-[11px] font-bold text-gray-600">Quét thẻ</span>
         </button>
         <button className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-600/30">
               <Clock className="w-6 h-6 text-white" />
            </div>
            <span className="text-[11px] font-bold text-gray-600">Xin lễ</span>
         </button>
         <button className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-fuchsia-500 rounded-2xl flex items-center justify-center shadow-lg shadow-fuchsia-500/30">
               <QrCode className="w-6 h-6 text-white" />
            </div>
            <span className="text-[11px] font-bold text-gray-600">Mã QR</span>
         </button>
         <button onClick={onProfileClick} className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
               <InfoIcon className="w-6 h-6 text-white" />
            </div>
            <span className="text-[11px] font-bold text-gray-600">Chi tiết</span>
         </button>
      </div>

      {/* Request Card - Modern Notification Style from Image */}
      <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 overflow-hidden relative">
         <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-indigo-600" />
         <div className="p-4 pl-6">
            <div className="flex gap-4">
               <div className="w-10 h-10 shrink-0 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-indigo-600" />
               </div>
               <p className="text-sm font-medium text-gray-800 leading-snug">
                  Linh mục <span className="font-extrabold text-indigo-900">Phaolo Hoàng Mạnh Huy</span> Giáo phận Phú Cường xin dâng lễ an táng.
               </p>
            </div>
            <div className="mt-4 flex items-center justify-between">
               <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">5 PHÚT TRƯỚC</span>
               <div className="flex gap-2">
                  <button className="bg-gray-50 text-gray-500 px-4 py-2 rounded-xl text-xs font-bold border border-gray-100">CHI TIẾT</button>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-indigo-100">
                     <Check className="w-4 h-4" />
                     DUYỆT
                  </button>
               </div>
            </div>
         </div>
      </div>

      {/* Search Section */}
      <div className="mt-2 space-y-4">
         <h3 className="text-lg font-display font-black text-gray-900 ml-1">Tìm kiếm Linh mục</h3>
         <div className="bg-white rounded-[32px] p-5 shadow-sm border border-gray-100 space-y-3">
            <div className="relative group">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 group-focus-within:text-primary transition-colors" />
               <input 
                 type="text" 
                 placeholder="Nhập tên Linh mục..." 
                 className="w-full bg-[#f8faff] rounded-[20px] py-4 pl-12 pr-4 outline-none font-bold text-sm text-gray-800 focus:bg-white border-2 border-transparent focus:border-primary/5 transition-all" 
               />
            </div>
            <div className="relative group">
               <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 group-focus-within:text-primary transition-colors" />
               <select className="w-full bg-[#f8faff] rounded-[20px] py-4 pl-12 pr-10 outline-none font-bold text-sm text-gray-800 appearance-none focus:bg-white border-2 border-transparent focus:border-primary/5 transition-all">
                  <option>Chọn Giáo phận</option>
                  <option>Phú Cường</option>
                  <option>Sài Gòn</option>
                  <option>Hà Nội</option>
               </select>
               <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 w-5 h-5" />
            </div>
            <button className="w-full bg-primary text-white py-4 rounded-[20px] font-black text-sm shadow-xl shadow-primary/10 flex items-center justify-center gap-2 active:scale-95 transition-all mt-1">
               <Search className="w-4 h-4" />
               TÌM KIẾM
            </button>
         </div>
      </div>

      {/* Help Link */}
      <button className="flex items-center justify-center gap-2 py-4 text-primary font-bold text-sm opacity-60 hover:opacity-100 transition-opacity">
         <InfoIcon className="w-4 h-4" />
         Hướng dẫn sử dụng Căn cước Linh mục
      </button>
    </div>
  );
};

const ProfileScreen = ({ onBack, isAdminView = false }: { onBack: () => void, isAdminView?: boolean }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F0F4F8] pb-32">
       {/* Header */}
       <header className="flex justify-between items-center px-4 py-3 sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
          <div className="flex items-center gap-2">
             <button onClick={onBack} className="p-2 text-blue-600">
                <ArrowLeft className="w-6 h-6" />
             </button>
             <div className="flex items-center gap-2">
                <h1 className="text-xl font-display font-black text-blue-600 tracking-tight">Digital Ecclesia</h1>
                <Bell className="w-5 h-5 text-blue-600" />
             </div>
          </div>
          <button className="px-4 py-1.5 border border-blue-200 rounded-full text-blue-600 text-xs font-bold hover:bg-blue-50 transition-colors">
             Đăng xuất
          </button>
       </header>

       {/* Profile Hero */}
       <div className="flex flex-col items-center pt-8 pb-6">
          <div className="relative mb-4">
             <div className="w-36 h-36 rounded-full border-[6px] border-white shadow-2xl overflow-hidden ring-1 ring-gray-100">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGmWxIVRZHVY7sZx9oNTNW9sV-enLy9YHyVPr-YRyTC4Vh6W_vmM2iDr1MD-CjemRbQACN9AAJ89iVpX3iHMBpP4GGL3a6piruosdhoQUUHTRPhlVWaKVNaHF8ANPbA9YUry1cGQS_jKFqI0UTjdy6_aYS5HyPXG40xuBs3O4il6AEKAGcxaeqzev1PRXYCDlSbDyswI3Z2mXxUwu9plX7-SPrJX-fD6vVa4QTxtxUNwB7i5sXy9uVOcmOvi_nqNb7-epUpvMR-K65" className="w-full h-full object-cover" />
             </div>
             <div className="absolute bottom-1.5 right-1.5 bg-blue-600 p-1.5 rounded-full border-[3px] border-white shadow-lg">
                <Verified className="w-4 h-4 text-white" />
             </div>
          </div>
          <div className="text-center">
             <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">TÊN THÁNH</p>
             <h2 className="text-2xl font-display font-black text-gray-900 leading-none mb-1">Giuse</h2>
             <h2 className="text-2xl font-display font-black text-blue-600 leading-none">Nguyễn Văn A</h2>
             <div className="mt-3 bg-[#E6F7F0] text-[#1DB171] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-[#C6EFDE] inline-flex items-center gap-1.5">
                <span className="w-2 h-2 bg-[#1DB171] rounded-full" />
                Đang hoạt động
             </div>
          </div>
       </div>

       {/* Digital ID Card */}
       <div className="px-4 mb-12">
          <div className="bg-gradient-to-br from-[#1976D2] to-[#1565C0] rounded-2xl p-6 shadow-[0_12px_24px_rgba(25,118,210,0.25)] text-white relative overflow-hidden h-[180px]">
             {/* Architectural Graphic */}
             <div className="absolute right-0 bottom-0 top-6 w-full opacity-[0.08] pointer-events-none">
                <Church className="w-64 h-64 -mr-16 -mb-16 float-right" />
             </div>
             
             <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="flex justify-between items-start">
                   <div className="space-y-1">
                      <p className="text-[10px] font-black opacity-60 tracking-widest uppercase">MÃ ĐỊNH DANH</p>
                      <h3 className="text-3xl font-black font-mono tracking-widest">ECC-882-021</h3>
                   </div>
                   <div className="w-7 h-7 border border-white/30 rounded-lg flex items-center justify-center">
                      <div className="w-3.5 h-3.5 border border-white/50" />
                   </div>
                </div>
                
                <div className="flex justify-between items-end">
                   <div className="space-y-1">
                      <p className="text-[10px] font-black opacity-60 tracking-widest uppercase">GIÁO PHẬN</p>
                      <p className="text-lg font-black leading-tight">Tổng Giáo Phận Sài Gòn</p>
                   </div>
                   <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30 shadow-lg group">
                      <QrCode className="w-8 h-8 text-white group-active:scale-110 transition-transform" />
                   </div>
                </div>
             </div>
          </div>
       </div>

       {/* Details Grid */}
       <div className="px-4 mt-8 space-y-6">
          <div className="flex items-center gap-2 px-1 py-1">
             <InfoIcon className="w-4 h-4 text-gray-400" />
             <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">THÔNG TIN CHI TIẾT</h4>
          </div>

          <div className="grid grid-cols-2 gap-4">
             <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-50 flex flex-col items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-[#E3F2FD] flex items-center justify-center text-[#2196F3]">
                   <Calendar className="w-6 h-6" />
                </div>
                <div>
                   <p className="text-[11px] text-gray-400 font-bold tracking-wide">Ngày sinh</p>
                   <p className="text-lg font-black text-gray-800">15/03/1975</p>
                </div>
             </div>
             <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-50 flex flex-col items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-[#E3F2FD] flex items-center justify-center text-[#2196F3]">
                   <Sparkles className="w-6 h-6" />
                </div>
                <div>
                   <p className="text-[11px] text-gray-400 font-bold tracking-wide">Thụ phong</p>
                   <p className="text-lg font-black text-gray-800">24/06/2002</p>
                </div>
             </div>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-gray-50 overflow-hidden">
             {[
               { icon: MapPin, label: 'Giáo xứ hiện tại', value: 'Giáo xứ Tân Định' },
               { icon: GraduationCap, label: 'Học hàm/Học vị', value: 'Tiến sĩ Thần học' },
               { icon: Mail, label: 'Email liên hệ', value: 'giuse.ngvan@ecclesia.vn', blue: true }
             ].map((item, idx) => (
                <div key={idx} className="p-5 flex items-center justify-between border-b last:border-0 border-gray-50">
                   <div className="flex items-center gap-4">
                      <item.icon className="w-5 h-5 text-gray-400" />
                      <span className="text-sm font-bold text-gray-500">{item.label}</span>
                   </div>
                   <span className={`text-sm font-black ${item.blue ? 'text-blue-600 underline' : 'text-gray-800'}`}>{item.value}</span>
                </div>
             ))}
          </div>

          {/* QR Display Section */}
          <div className="bg-white rounded-[40px] p-8 border border-gray-50 shadow-sm text-center">
             <h3 className="text-2xl font-display font-black text-blue-600 mb-6">Mã QR định danh</h3>
             
             <div className="relative mx-auto w-64 h-64 bg-white p-8 rounded-3xl border border-blue-50 flex items-center justify-center">
                {/* Decorative corners from image */}
                <div className="absolute top-4 left-4 w-10 h-10 border-t-2 border-l-2 border-orange-200 rounded-tl-xl" />
                <div className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-orange-200 rounded-tr-xl" />
                <div className="absolute bottom-4 left-4 w-10 h-10 border-b-2 border-l-2 border-orange-200 rounded-bl-xl" />
                <div className="absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2 border-orange-200 rounded-br-xl" />
                
                <div className="w-full h-full p-2 grayscale opacity-90">
                   <QrCode className="w-full h-full text-gray-800" />
                </div>
             </div>
             
             <p className="mt-8 text-sm font-bold text-gray-400 leading-relaxed max-w-[280px] mx-auto">
                Sử dụng mã này để quét tại các cổng kiểm soát giáo phận hoặc xác thực quyền hành lễ.
             </p>
          </div>

          {/* Timeline Section */}
          <section className="space-y-4 pt-2">
             <div className="flex items-center gap-2 px-1">
                <History className="w-4 h-4 text-gray-500" />
                <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">LỊCH SỬ CÔNG TÁC</h4>
             </div>
             <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-50">
                <div className="space-y-10 relative">
                   <div className="absolute left-[7px] top-2 bottom-6 w-[2px] bg-gray-50" />
                   
                   <div className="relative pl-8">
                      <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-blue-50" />
                      <div className="flex flex-col gap-1">
                         <span className="text-[11px] font-black text-blue-600 uppercase tracking-widest">2018 - Nay</span>
                         <h5 className="text-base font-black text-gray-800 uppercase leading-snug">Chánh xứ</h5>
                         <p className="text-xs font-bold text-gray-400">Giáo xứ Tân Định, Quận 3, TP.HCM</p>
                      </div>
                   </div>

                   <div className="relative pl-8">
                      <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-gray-200 border-2 border-white ring-4 ring-white" />
                      <div className="flex flex-col gap-1">
                         <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest">2012 - 2018</span>
                         <h5 className="text-base font-black text-gray-700 uppercase leading-snug">Phụ tá Giám đốc</h5>
                         <p className="text-xs font-bold text-gray-400">Đại chủng viện Thánh Giuse Sài Gòn</p>
                      </div>
                   </div>
                </div>
             </div>
          </section>

          {/* Update List */}
          <section className="space-y-4">
             <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">LỊCH SỬ CẬP NHẬT</h4>
             <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-50 divide-y divide-gray-50">
                <div className="py-3 flex justify-between items-center group">
                   <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gray-200" />
                      <span className="text-xs font-bold text-gray-600">Cập nhật chức vụ mới</span>
                   </div>
                   <span className="text-xs font-black text-gray-300">12/10/2023</span>
                </div>
                <div className="py-3 flex justify-between items-center group">
                   <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gray-200" />
                      <span className="text-xs font-bold text-gray-600">Thay đổi địa chỉ liên lạc</span>
                   </div>
                   <span className="text-xs font-black text-gray-300">05/08/2023</span>
                </div>
             </div>
          </section>
       </div>
    </div>
  );
};

const ScanScreen = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black z-[60] flex flex-col h-screen overflow-hidden">
       <header className="flex justify-between items-center p-6 bg-transparent text-white z-10">
          <button onClick={onClose} className="p-2 text-white">
             <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-display font-black text-white">Digital Ecclesia</h1>
          <Bell className="w-6 h-6" />
       </header>

       <div className="flex-grow flex flex-col items-center justify-center p-6 relative">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBM9wcX763jjAJLFLB6K3UBguIYziLeiCEtQm4AIigbMybNsaMW7Fn_HWszNr4gSpUaAcM14O8o7OqV1DHEQNO0J8K7m0IGpvaUw_oCUZziRh-Gmrg4BRk8_qb0-8S0cZGWL-Ek2Y5bYlWPtuTfrocH_ZrgxiV5it0UmzjeqKg1qwsQN9GMlSZix0_VocSMFUMJbkyzWivj1UnBbNROoOnafaSSMKtrxY-YoBvR2yXB3WlORBXet7eEVe5CTIwqoBgFzmFfvpyQffgy" className="absolute inset-0 w-full h-full object-cover opacity-60" />
          
          <div className="relative w-64 h-64 md:w-80 md:h-80 z-10" style={{ boxShadow: '0 0 0 4000px rgba(0,0,0,0.45)' }}>
             <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-primary rounded-tl-2xl shadow-[0_0_20px_rgba(37,99,235,0.5)]" />
             <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-primary rounded-tr-2xl shadow-[0_0_20px_rgba(37,99,235,0.5)]" />
             <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-primary rounded-bl-2xl shadow-[0_0_20px_rgba(37,99,235,0.5)]" />
             <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-primary rounded-br-2xl shadow-[0_0_20px_rgba(37,99,235,0.5)]" />
             
             <motion.div 
              animate={{ top: ['10%', '90%', '10%'] }} 
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute left-4 right-4 h-0.5 bg-primary/80 shadow-[0_0_10px_rgba(37,99,235,1)]"
             />
          </div>
          
          <p className="text-white font-bold mt-12 z-10 drop-shadow-md text-center max-w-xs leading-relaxed">Căn chỉnh mã QR vào trong khung để quét</p>
          
          <div className="mt-12 flex gap-8 z-10">
             <button className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20">
                <Flashlight className="w-7 h-7 fill-white/10" />
             </button>
             <button className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20">
                <ImageIcon className="w-7 h-7 fill-white/10" />
             </button>
          </div>
       </div>
    </div>
  );
};

const NFCScreen = ({ onCancel }: { onCancel: () => void }) => {
  return (
    <div className="fixed inset-0 bg-white z-[60] flex flex-col h-screen p-8 pt-24 overflow-hidden items-center text-center">
       {/* Ambient Ripples */}
       {[1, 2, 3].map(i => (
         <motion.div
           key={i}
           animate={{ scale: [0.8, 1.5], opacity: [0.3, 0] }}
           transition={{ duration: 4, repeat: Infinity, delay: i * 1.3 }}
           className="absolute w-[400px] h-[400px] border border-primary/20 rounded-full"
         />
       ))}

       <div className="relative z-10 flex flex-col items-center justify-center flex-grow mb-24">
          <div className="relative mb-12">
             <div className="w-56 h-56 bg-gray-50 rounded-full shadow-inner flex items-center justify-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                   <Nfc className="w-12 h-12 text-primary" />
                </div>
             </div>
             <motion.div 
               animate={{ y: [0, -10, 0], rotate: [12, 10, 12] }} 
               transition={{ duration: 4, repeat: Infinity }}
               className="absolute -bottom-4 right-0 w-32 h-20 nfc-gradient rounded-2xl shadow-xl flex items-center justify-center rotate-12 border-2 border-white/20"
             >
                <BadgeCheck className="w-10 h-10 text-white fill-white/10" />
             </motion.div>
          </div>
          <h2 className="text-3xl font-display font-extrabold mb-4">Đang quét NFC</h2>
          <p className="text-gray-400 font-medium max-w-xs leading-relaxed">Vui lòng chạm thẻ linh mục vào vùng cảm biến NFC trên điện thoại</p>
       </div>

       <button 
        onClick={onCancel}
        className="w-full bg-white border border-gray-100 py-4.5 rounded-2xl font-bold text-gray-500 flex items-center justify-center gap-3 relative z-10 shadow-sm"
       >
          <X className="w-5 h-5" />
          Hủy
       </button>
    </div>
  );
};

// --- App Entry Point ---

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [currentScreen, setCurrentScreen] = useState<'home' | 'profile' | 'scan' | 'nfc' | 'login' | 'priest-dashboard' | 'priest-profile'>('home');
  const [userRole, setUserRole] = useState<'public' | 'priest'>('public');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home': return (
        <LaymanHomeScreen 
          onPriestClick={() => setCurrentScreen('profile')} 
          onLoginClick={() => setCurrentScreen('login')} 
        />
      );
      case 'profile': return <ProfileScreen onBack={() => handleTabChange('home')} />;
      case 'priest-profile': return <ProfileScreen onBack={() => setCurrentScreen('priest-dashboard')} isAdminView={true} />;
      case 'scan': return <ScanScreen onClose={() => handleTabChange('home')} />;
      case 'nfc': return <NFCScreen onCancel={() => handleTabChange('home')} />;
      case 'login': return (
        <LoginScreen 
          onLogin={() => { setUserRole('priest'); setCurrentScreen('priest-dashboard'); setActiveTab('home'); }} 
          onBack={() => setCurrentScreen('home')} 
        />
      );
      case 'priest-dashboard': return (
        <PriestHomeScreen 
          onLogout={() => { setUserRole('public'); setCurrentScreen('home'); setActiveTab('home'); }} 
          onProfileClick={() => setCurrentScreen('priest-profile')}
        />
      );
      default: return <LaymanHomeScreen onPriestClick={() => setCurrentScreen('profile')} onLoginClick={() => setCurrentScreen('login')} />;
    }
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'home') setCurrentScreen(userRole === 'priest' ? 'priest-dashboard' : 'home');
    if (tab === 'scan') setCurrentScreen('scan');
    if (tab === 'nfc') setCurrentScreen('nfc');
    // history and settings could be dummy screens if needed
  };

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center sm:p-4">
      <div className="w-full max-w-[440px] bg-white h-[100dvh] sm:h-[880px] sm:rounded-[60px] relative overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.2)] border-x sm:border-y border-gray-200/50">
        <div className="absolute inset-0 overflow-y-auto no-scrollbar scroll-smooth">
          <AnimatePresence mode="wait">
            <motion.div
               key={currentScreen}
               initial={{ opacity: 0, scale: 0.98 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 1.02 }}
               transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {renderScreen()}
            </motion.div>
          </AnimatePresence>
        </div>
        
        {currentScreen !== 'scan' && currentScreen !== 'nfc' && currentScreen !== 'login' && (
          <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />
        )}
      </div>
    </div>
  );
}
