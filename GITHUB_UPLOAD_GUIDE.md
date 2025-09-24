# 🚀 GitHub'a Manuel Yükleme Rehberi

## Adım 1: GitHub Repository'ye Git
https://github.com/Godisnowhere22/prismacore-website

## Adım 2: Dosyaları Yükle

### Yöntem 1: Web Interface (Kolay)
1. **"Upload files"** butonuna tıklayın
2. **Tüm dosyaları** sürükleyip bırakın
3. **Commit message** yazın: "Initial commit - PrismaCore.ai website"
4. **"Commit changes"** butonuna tıklayın

### Yöntem 2: Git Command Line
```bash
# Repository'yi clone edin
git clone https://github.com/Godisnowhere22/prismacore-website.git

# Klasöre girin
cd prismacore-website

# Dosyaları kopyalayın (bu klasördeki tüm dosyaları)

# Git'e ekleyin
git add .

# Commit yapın
git commit -m "Initial commit - PrismaCore.ai website"

# Push edin
git push origin main
```

## 🔧 Önemli Dosyalar

### Mutlaka yüklenmesi gerekenler:
- ✅ `package.json` - Bağımlılıklar
- ✅ `src/` klasörü - Tüm React kodları
- ✅ `public/` klasörü - Logolar ve resimler
- ✅ `supabase/` klasörü - Veritabanı
- ✅ `tailwind.config.js` - CSS ayarları
- ✅ `vite.config.ts` - Build ayarları
- ✅ `tsconfig.json` - TypeScript ayarları

### Opsiyonel:
- `.gitignore` - Git ignore kuralları
- `README.md` - Proje açıklaması
- `DOWNLOAD_INSTRUCTIONS.md` - Bu dosya

## 🎯 Sonraki Adımlar

1. **GitHub'a yükleyin**
2. **Vercel/Netlify** ile otomatik deployment kurun
3. **Custom domain** bağlayın
4. **SSL sertifikası** otomatik gelecek

## 📞 Yardım

Sorun yaşarsanız:
- GitHub Issues açın
- E-posta: info@prismacore.ai
- WhatsApp: +90 (546) 973 64 27