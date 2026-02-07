# V-MENTOR AI PROFESSIONAL 2026

## 🎯 Giới thiệu

**V-Mentor AI Professional 2026** là hệ thống tư vấn hướng nghiệp thông minh, sử dụng thuật toán AI và Holland Code để phân tích tố chất, năng lực và đưa ra lời khuyên chính xác về lộ trình học tập - nghề nghiệp cho học sinh THPT và học sinh hệ Trung cấp/Cao đẳng nghề.

---

## ✨ Tính năng chính

### 🔬 **Holland Test nâng cao (36 câu hỏi)**
- 6 nhóm tố chất: Realistic, Investigative, Artistic, Social, Enterprising, Conventional
- Giao diện accordion thân thiện, dễ sử dụng
- Validation đảm bảo độ chính xác (yêu cầu ít nhất 18/36 câu)
- Biểu đồ radar trực quan hóa kết quả

### 🎓 **Hỗ trợ đa dạng hệ đào tạo**
- Hệ THPT: Định hướng Đại học/Cao đẳng
- Hệ Nghề: Trung cấp/Cao đẳng nghề
- Tích hợp kinh nghiệm nghề cũ vào phân tích

### 📚 **Đánh giá năng lực toàn diện**
- 10 môn học: Toán, Văn, Anh, Lý, Hóa, Sinh, Tin, Sử, Địa, GDCD
- 8 kỹ năng mềm 4.0: Giao tiếp, Teamwork, Sáng tạo, Logic, AI, Ngoại ngữ...

### 💼 **24 ngành nghề cập nhật 2026**
Phân loại theo 4 nhóm chính:
- **Công nghệ**: IT/AI, Ô tô điện, Bán dẫn, Xây dựng, Nông nghiệp công nghệ cao
- **Kinh doanh**: Marketing, Logistics, Tài chính-Ngân hàng, Luật
- **Y tế**: Y khoa, Dược, Điều dưỡng
- **Sáng tạo**: Thiết kế, Báo chí, Du lịch-Khách sạn, Giáo dục, Ngôn ngữ

### 🤖 **Thuật toán AI phân tích chuyên sâu**

#### Công thức tính điểm phù hợp (0-100%):
```javascript
matchScore = 
    Holland Code Match (40%) +
    Subject Match (25%) +
    Soft Skills Match (20%) +
    Overall Holland Alignment (15%)
```

#### Phân loại kết quả:
- **85-100%**: Xuất sắc - Perfect Match
- **70-84%**: Rất tốt - Highly Compatible  
- **55-69%**: Khá phù hợp - Compatible
- **<55%**: Cần cân nhắc - Consider Alternatives

### 📊 **Báo cáo kết quả chi tiết**
1. **Hero Card**: Điểm phù hợp với animation circle, mã Holland
2. **Biểu đồ Radar**: Trực quan hóa 6 tố chất Holland
3. **Phân tích AI**: Giải thích logic matching, điểm mạnh/yếu
4. **Trường đào tạo**: Danh sách ĐH/CĐ uy tín + điểm chuẩn
5. **Lộ trình 2026-2030**: Timeline từng bước cụ thể
6. **Triển vọng nghề nghiệp**: Mức lương, tăng trưởng, vị trí việc làm
7. **Khuyến nghị cá nhân hóa**: Dựa trên gaps và strengths

### 💾 **Tính năng tiện ích**
- ✅ Lưu trạng thái tạm (trong phiên làm việc)
- ✅ Chia sẻ kết quả qua link/social
- ✅ Xuất PDF (Print-friendly)
- ✅ Làm lại test

---

## 🚀 Cài đặt & Sử dụng

### Yêu cầu
- Trình duyệt web hiện đại (Chrome, Firefox, Safari, Edge)
- Không cần server, chạy 100% client-side

### Cách 1: Mở trực tiếp
```bash
# Mở file index.html bằng trình duyệt
# Double click vào index.html
```

### Cách 2: Chạy local server (khuyến nghị)
```bash
# Dùng Python
python -m http.server 8000

# Hoặc dùng Node.js
npx http-server -p 8000

# Truy cập: http://localhost:8000
```

---

## 📂 Cấu trúc thư mục

```
v-mentor-ai/
│
├── index.html          # Giao diện chính
├── styles.css          # Thiết kế responsive
├── data.js            # Database ngành nghề & Holland Test
├── app.js             # Logic phân tích AI
└── README.md          # Tài liệu hướng dẫn
```

---

## 🔧 Công nghệ sử dụng

- **HTML5**: Semantic markup
- **CSS3**: Flexbox, Grid, Animations, Gradients
- **JavaScript (ES6+)**: Vanilla JS, không framework
- **Chart.js**: Biểu đồ radar Holland
- **jsPDF**: Xuất PDF (tích hợp)

---

## 📊 Dữ liệu ngành nghề

Mỗi ngành nghề bao gồm:
- **Thông tin cơ bản**: Tên, icon, mô tả, Holland Code
- **Trường đào tạo**: 4-5 Đại học + 2-3 Cao đẳng/Trung cấp
- **Điểm chuẩn**: Điểm + tổ hợp môn thi
- **Mức lương**: Entry/Mid/Senior level
- **Triển vọng**: % tăng trưởng ngành
- **Vị trí việc làm**: 4-6 vị trí phổ biến
- **Skills yêu cầu**: Môn học + Soft skills
- **Lộ trình**: Riêng cho THPT và Nghề
- **Khuyến nghị**: 4-5 tips thực chiến

---

## 🎨 Tùy chỉnh

### Thêm ngành nghề mới

Mở file `data.js`, thêm vào object `careersDatabase`:

```javascript
'career-id': {
    id: 'career-id',
    name: 'Tên ngành nghề',
    icon: '🎯',
    category: 'tech|business|health|creative',
    hollandCode: 'I-R',
    description: 'Mô tả ngắn',
    universities: ['ĐH 1', 'ĐH 2'],
    vocational: ['CĐ 1', 'CĐ 2'],
    admissionScore: {
        university: '25-28 điểm',
        subjects: 'Toán, Lý, Anh'
    },
    salary: {
        entry: '10-15tr',
        mid: '20-40tr',
        senior: '50-100tr'
    },
    growth: 'Tăng 20%/năm',
    positions: ['Vị trí 1', 'Vị trí 2'],
    skills: ['Toán', 'Anh', 'Logic'],
    roadmap: {
        thpt: ['Bước 1', 'Bước 2'],
        vocational: ['Bước 1', 'Bước 2']
    },
    recommendations: ['Tip 1', 'Tip 2']
}
```

### Điều chỉnh thuật toán matching

Mở file `app.js`, tìm hàm `calculateMatchScore()`:

```javascript
// Thay đổi trọng số
if (userCodes[0] === careerCodes[0]) score += 25; // Điều chỉnh ở đây
```

### Thay đổi màu sắc

Mở file `styles.css`, chỉnh CSS variables:

```css
:root {
    --primary: #1e40af;     /* Màu chính */
    --secondary: #3b82f6;   /* Màu phụ */
    --success: #10b981;     /* Màu thành công */
    /* ... */
}
```

---

## 🐛 Khắc phục sự cố

### Biểu đồ không hiển thị
- Kiểm tra CDN Chart.js đã load chưa
- Mở DevTools > Console xem lỗi
- Thử chạy qua http server thay vì file://

### Dữ liệu bị mất khi reload
- Hệ thống không lưu vào localStorage (by design)
- Dùng tính năng "Xuất PDF" để lưu kết quả
- Có thể tự code thêm localStorage nếu cần

### Responsive không đúng trên mobile
- Kiểm tra viewport meta tag trong HTML
- Test trên Chrome DevTools > Device mode
- Điều chỉnh breakpoints trong CSS

---

## 📈 Roadmap phát triển

### Version 2.0 (Q2 2026)
- [ ] Tích hợp Backend API
- [ ] Lưu trữ kết quả dài hạn (Database)
- [ ] Xuất PDF chất lượng cao
- [ ] Thêm 20 ngành nghề mới
- [ ] So sánh nhiều ngành cùng lúc

### Version 3.0 (Q4 2026)
- [ ] Machine Learning predictions
- [ ] Chatbot tư vấn AI
- [ ] Hệ thống đề xuất trường học theo vị trí
- [ ] Tích hợp API tra cứu điểm chuẩn realtime
- [ ] Mobile App (iOS/Android)

---

## 🤝 Đóng góp

Mọi đóng góp đều được chào đón! Hãy:
1. Fork repo
2. Tạo branch mới (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

---

## 📜 Bản quyền

© 2026 V-Mentor AI Professional. Phát triển bởi Bộ GD&ĐT Việt Nam.

**License**: MIT License - Sử dụng tự do cho mục đích giáo dục và phi lợi nhuận.

---

## 📞 Liên hệ & Hỗ trợ

- **Email**: support@vmentor.edu.vn
- **Website**: https://vmentor.edu.vn
- **Hotline**: 1900-xxxx

---

## 🙏 Lời cảm ơn

- Holland Code Theory - Dr. John L. Holland
- Chart.js Team
- Tất cả các trường Đại học/Cao đẳng đã cung cấp dữ liệu
- Cộng đồng developers Việt Nam

---

**Chúc bạn tìm được con đường sự nghiệp phù hợp! 🚀**
