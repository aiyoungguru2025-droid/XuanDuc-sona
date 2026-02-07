// ==================== HOLLAND TEST DATA ====================
const hollandData = [
    {
        id: 'R',
        name: 'Kỹ thuật (Realistic)',
        description: 'Thích làm việc với công cụ, máy móc, thực hành',
        color: '#ef4444',
        questions: [
            "Sửa chữa thiết bị điện tử, đồ dùng",
            "Làm việc với công cụ/máy móc",
            "Vận động ngoài trời, hoạt động thể chất",
            "Lắp ráp mô hình, thiết bị",
            "Khéo léo với tay chân",
            "Thích thực hành hơn lý thuyết"
        ]
    },
    {
        id: 'I',
        name: 'Nghiên cứu (Investigative)',
        description: 'Thích nghiên cứu, phân tích, tìm hiểu',
        color: '#8b5cf6',
        questions: [
            "Giải bài tập logic, toán học",
            "Tìm hiểu nguyên lý hoạt động",
            "Làm thí nghiệm/Nghiên cứu khoa học",
            "Phân tích dữ liệu, số liệu",
            "Khám phá điều mới lạ",
            "Suy nghĩ độc lập, sâu sắc"
        ]
    },
    {
        id: 'A',
        name: 'Nghệ thuật (Artistic)',
        description: 'Thích sáng tạo, nghệ thuật, thẩm mỹ',
        color: '#ec4899',
        questions: [
            "Vẽ/Thiết kế/Chụp ảnh",
            "Sáng tác, viết lách tự do",
            "Biểu diễn nghệ thuật",
            "Sáng tạo nội dung",
            "Nhạy cảm với cái đẹp",
            "Làm mới những điều cũ kỹ"
        ]
    },
    {
        id: 'S',
        name: 'Xã hội (Social)',
        description: 'Thích giúp đỡ, dạy dỗ, chăm sóc người khác',
        color: '#10b981',
        questions: [
            "Giúp đỡ mọi người",
            "Giảng dạy/Truyền đạt kiến thức",
            "Lắng nghe & Tư vấn",
            "Tham gia hoạt động thiện nguyện",
            "Làm việc trong đội nhóm",
            "Giao tiếp xã hội tốt"
        ]
    },
    {
        id: 'E',
        name: 'Quản lý (Enterprising)',
        description: 'Thích lãnh đạo, thuyết phục, kinh doanh',
        color: '#f59e0b',
        questions: [
            "Lãnh đạo đội nhóm",
            "Thuyết phục người khác",
            "Kinh doanh/Khởi nghiệp",
            "Chấp nhận thử thách, rủi ro",
            "Ra quyết định nhanh chóng",
            "Tạo dựng mối quan hệ"
        ]
    },
    {
        id: 'C',
        name: 'Quy củ (Conventional)',
        description: 'Thích công việc có tổ chức, chi tiết, chính xác',
        color: '#3b82f6',
        questions: [
            "Sắp xếp đồ ngăn nắp",
            "Làm việc theo kế hoạch rõ ràng",
            "Tính toán bảng biểu, số liệu",
            "Kiểm tra lỗi tỉ mỉ",
            "Tuân thủ quy trình, quy định",
            "Quản lý hồ sơ, tài liệu"
        ]
    }
];

// ==================== CAREERS DATABASE ====================
const careersDatabase = {
    // ========== CÔNG NGHỆ ==========
    'it-software': {
        id: 'it-software',
        name: 'Công nghệ Thông tin & Phần mềm',
        icon: '💻',
        category: 'tech',
        hollandCode: 'I-R',
        description: 'Lập trình, phát triển phần mềm, AI, Machine Learning',
        
        universities: [
            'ĐH Bách Khoa TP.HCM',
            'ĐH Công nghệ - ĐH Quốc gia',
            'ĐH FPT',
            'ĐH KHTN',
            'ĐH Tôn Đức Thắng'
        ],
        
        vocational: [
            'CĐ FPT Polytechnic',
            'CĐ Cao Thắng',
            'CĐ Công nghệ Thủ Đức',
            'CĐ CNTT TP.HCM'
        ],
        
        admissionScore: {
            university: '25-28 điểm',
            subjects: 'Toán, Lý, Anh hoặc Toán, Văn, Anh'
        },
        
        salary: {
            entry: '10-15 triệu/tháng',
            mid: '20-40 triệu/tháng',
            senior: '50-100+ triệu/tháng'
        },
        
        growth: 'Tăng trưởng 25-30%/năm, nhu cầu rất cao',
        
        positions: [
            'Kỹ sư AI/Machine Learning',
            'Full-stack Developer',
            'DevOps Engineer',
            'Cloud Architect',
            'Data Scientist',
            'Mobile Developer'
        ],
        
        skills: ['Toán', 'Tin', 'Anh', 'Logic', 'Sử dụng AI'],
        
        roadmap: {
            thpt: [
                'Tập trung ôn tập tổ hợp Toán, Lý, Anh (A00) hoặc Toán, Văn, Anh (D01)',
                'Học thêm lập trình cơ bản: Python, HTML/CSS/JavaScript',
                'Đăng ký nguyện vọng vào các trường top',
                'Năm 1-2: Nền tảng lập trình, cấu trúc dữ liệu, giải thuật',
                'Năm 3-4: Chuyên sâu AI/ML, thực tập tại công ty công nghệ',
                'Lấy chứng chỉ quốc tế: AWS, Google Cloud, Azure'
            ],
            vocational: [
                'Chọn CĐ FPT Poly hoặc CĐ Cao Thắng - chương trình thực hành cao',
                'Tập trung học lập trình web, mobile',
                'Tham gia các cuộc thi Hackathon, IT Competition',
                'Thực tập từ năm 2, làm dự án thực tế',
                'Liên thông lên Đại học nếu muốn phát triển cao hơn'
            ]
        },
        
        recommendations: [
            'Tham gia cộng đồng lập trình: GitHub, Stack Overflow',
            'Làm dự án cá nhân để xây dựng portfolio',
            'Học tiếng Anh chuyên ngành IT',
            'Theo dõi các khóa học online: Coursera, Udemy',
            'Tham gia các câu lạc bộ coding tại trường'
        ]
    },

    'auto-ev': {
        id: 'auto-ev',
        name: 'Kỹ thuật Ô tô & Xe điện',
        icon: '🚗',
        category: 'tech',
        hollandCode: 'R-I',
        description: 'Công nghệ ô tô, xe điện, cơ khí động lực',
        
        universities: [
            'ĐH Sư phạm Kỹ thuật TP.HCM',
            'ĐH Bách Khoa TP.HCM',
            'ĐH Giao thông Vận tải',
            'ĐH Công nghiệp TP.HCM'
        ],
        
        vocational: [
            'CĐ Công nghệ Thủ Đức',
            'CĐ Cao Thắng',
            'CĐ Giao thông Vận tải',
            'Trường Cao đẳng nghề ô tô'
        ],
        
        admissionScore: {
            university: '22-26 điểm',
            subjects: 'Toán, Lý, Hóa hoặc Toán, Lý, Anh'
        },
        
        salary: {
            entry: '8-12 triệu/tháng',
            mid: '15-30 triệu/tháng',
            senior: '35-70 triệu/tháng'
        },
        
        growth: 'Tăng 20%/năm nhờ xe điện boom',
        
        positions: [
            'Kỹ sư xe điện/EV',
            'Chuyên viên bảo dưỡng ô tô cao cấp',
            'Quản lý xưởng dịch vụ',
            'Kỹ sư thiết kế ô tô',
            'Chuyên gia hệ thống pin'
        ],
        
        skills: ['Toán', 'Lý', 'Tin', 'Logic'],
        
        roadmap: {
            thpt: [
                'Ôn tập tổ hợp A00 (Toán, Lý, Hóa)',
                'Tìm hiểu về công nghệ xe điện, pin Lithium',
                'Đăng ký các trường kỹ thuật uy tín',
                'Năm 1-2: Nền tảng cơ khí, động cơ đốt trong',
                'Năm 3-4: Chuyên sâu EV, pin, motor điện, thực tập tại hãng xe'
            ],
            vocational: [
                'Chọn CĐ Công nghệ Thủ Đức - đào tạo thực hành tốt',
                'Học kỹ thuật sửa chữa ô tô từ cơ bản đến nâng cao',
                'Thi tay nghề giỏi cấp Quốc gia',
                'Làm việc tại garage hoặc đại lý xe chính hãng',
                'Nâng cao kiến thức về xe điện qua các khóa đào tạo ngắn hạn'
            ]
        },
        
        recommendations: [
            'Tham gia câu lạc bộ xe hơi, robotics',
            'Tìm hiểu về Tesla, VinFast, BYD',
            'Học AutoCAD, SolidWorks cho thiết kế',
            'Làm thêm tại garage để tích lũy kinh nghiệm'
        ]
    },

    'semiconductor': {
        id: 'semiconductor',
        name: 'Công nghệ Bán dẫn & Vi mạch',
        icon: '🔬',
        category: 'tech',
        hollandCode: 'I-R',
        description: 'Thiết kế chip, vi mạch, công nghệ nano',
        
        universities: [
            'ĐH Bách Khoa TP.HCM',
            'ĐH Quốc gia Hà Nội',
            'ĐH FPT',
            'ĐH Công nghệ - ĐH Quốc gia'
        ],
        
        vocational: [
            'Học viện Kỹ thuật quân sự',
            'CĐ Điện tử Viễn thông'
        ],
        
        admissionScore: {
            university: '26-29 điểm',
            subjects: 'Toán, Lý, Anh (khối A00)'
        },
        
        salary: {
            entry: '15-25 triệu/tháng',
            mid: '30-60 triệu/tháng',
            senior: '80-150+ triệu/tháng'
        },
        
        growth: 'Tăng trưởng mạnh 30-40%/năm, ngành hot nhất 2026',
        
        positions: [
            'Kỹ sư thiết kế chip',
            'Kỹ sư kiểm thử vi mạch',
            'Kỹ sư công nghệ nano',
            'Chuyên viên R&D bán dẫn'
        ],
        
        skills: ['Toán', 'Lý', 'Anh', 'Logic', 'Sử dụng AI'],
        
        roadmap: {
            thpt: [
                'Tập trung Toán, Lý cực mạnh',
                'Học tiếng Anh chuyên ngành điện tử',
                'Đăng ký vào các trường top có ngành Điện tử - Viễn thông',
                'Năm 1-2: Nền tảng điện tử, vật liệu bán dẫn',
                'Năm 3-4: Chuyên sâu thiết kế VLSI, layout chip, thực tập tại Samsung/Intel'
            ],
            vocational: [
                'Ngành này yêu cầu trình độ đại học trở lên',
                'Nếu học CĐ, nên liên thông lên ĐH ngay'
            ]
        },
        
        recommendations: [
            'Tìm hiểu về Verilog, VHDL',
            'Học các công cụ thiết kế: Cadence, Synopsys',
            'Theo dõi xu hướng chip AI, NPU',
            'Tham gia các chương trình thực tập tại Samsung, Intel'
        ]
    },

    // ========== KINH DOANH ==========
    'business-marketing': {
        id: 'business-marketing',
        name: 'Kinh doanh & Marketing',
        icon: '📊',
        category: 'business',
        hollandCode: 'E-S',
        description: 'Marketing, E-commerce, Digital Marketing',
        
        universities: [
            'ĐH Kinh tế TP.HCM (UEH)',
            'ĐH Ngoại thương',
            'ĐH Kinh tế - Luật',
            'ĐH Tài chính - Marketing',
            'ĐH Hoa Sen'
        ],
        
        vocational: [
            'CĐ Kinh tế Đối ngoại',
            'CĐ Viễn Đông',
            'CĐ Kỹ thuật - Kinh tế'
        ],
        
        admissionScore: {
            university: '23-27 điểm',
            subjects: 'Toán, Văn, Anh (D01) hoặc Toán, Anh, Văn'
        },
        
        salary: {
            entry: '8-12 triệu/tháng',
            mid: '15-35 triệu/tháng',
            senior: '40-100+ triệu/tháng (có thưởng KPI)'
        },
        
        growth: 'Tăng 15-20%/năm, đặc biệt E-commerce',
        
        positions: [
            'Chuyên viên Marketing Digital',
            'E-commerce Manager',
            'Social Media Manager',
            'Brand Manager',
            'Sales Manager',
            'Founder/Startup'
        ],
        
        skills: ['Văn', 'Anh', 'Giao tiếp', 'Tư duy sáng tạo', 'Sử dụng AI'],
        
        roadmap: {
            thpt: [
                'Ôn tập tổ hợp D01 (Toán, Văn, Anh)',
                'Tìm hiểu về Marketing 4.0, Social Media',
                'Đăng ký các trường kinh tế uy tín',
                'Năm 1-2: Nền tảng kinh tế, marketing căn bản',
                'Năm 3-4: Chuyên sâu Digital Marketing, thực tập tại agency/brand lớn',
                'Lấy chứng chỉ Google Ads, Facebook Blueprint'
            ],
            vocational: [
                'Chọn CĐ Kinh tế Đối ngoại hoặc CĐ Viễn Đông',
                'Học bán hàng, marketing thực chiến',
                'Tham gia các cuộc thi Marketing, Startup',
                'Làm thêm bán hàng online để tích lũy kinh nghiệm'
            ]
        },
        
        recommendations: [
            'Tạo page/kênh cá nhân để thực hành marketing',
            'Học các công cụ: Canva, Adobe Suite, Analytics',
            'Tham gia cộng đồng Marketers Việt Nam',
            'Đọc sách: "This is Marketing" của Seth Godin'
        ]
    },

    'logistics': {
        id: 'logistics',
        name: 'Logistics & Chuỗi cung ứng',
        icon: '📦',
        category: 'business',
        hollandCode: 'C-E',
        description: 'Quản trị logistics, kho vận, xuất nhập khẩu',
        
        universities: [
            'ĐH Giao thông Vận tải',
            'ĐH Ngoại thương',
            'ĐH Kinh tế TP.HCM',
            'RMIT Việt Nam'
        ],
        
        vocational: [
            'CĐ Giao thông Vận tải',
            'CĐ Kinh tế Đối ngoại'
        ],
        
        admissionScore: {
            university: '22-25 điểm',
            subjects: 'Toán, Văn, Anh'
        },
        
        salary: {
            entry: '9-13 triệu/tháng',
            mid: '18-35 triệu/tháng',
            senior: '40-80 triệu/tháng'
        },
        
        growth: 'Tăng 18%/năm nhờ thương mại điện tử phát triển',
        
        positions: [
            'Quản lý chuỗi cung ứng',
            'Chuyên viên kho vận quốc tế',
            'Logistics Coordinator',
            'Warehouse Manager'
        ],
        
        skills: ['Toán', 'Anh', 'Logic', 'Làm việc nhóm'],
        
        roadmap: {
            thpt: [
                'Tổ hợp D01 (Toán, Văn, Anh)',
                'Học tiếng Anh giao tiếp thương mại',
                'Năm 1-2: Nền tảng logistics, supply chain',
                'Năm 3-4: Thực tập tại DHL, FedEx, Lazada Logistics'
            ],
            vocational: [
                'Học thực hành kho vận, xuất nhập khẩu',
                'Thi chứng chỉ Logistics quốc tế',
                'Làm việc tại các công ty logistics lớn'
            ]
        },
        
        recommendations: [
            'Học phần mềm quản lý kho: SAP, WMS',
            'Tìm hiểu về chuỗi cung ứng của Amazon, Alibaba',
            'Tham gia các hội thảo về logistics 4.0'
        ]
    },

    // ========== Y TẾ ==========
    'medicine': {
        id: 'medicine',
        name: 'Y khoa & Dược',
        icon: '⚕️',
        category: 'health',
        hollandCode: 'I-S',
        description: 'Bác sĩ, Dược sĩ, Y tế cộng đồng',
        
        universities: [
            'ĐH Y Dược TP.HCM',
            'ĐH Y Hà Nội',
            'ĐH Phạm Ngọc Thạch',
            'ĐH Y khoa Phạm Ngọc Thạch'
        ],
        
        vocational: [
            'CĐ Y tế TP.HCM',
            'CĐ Dược Hà Nội'
        ],
        
        admissionScore: {
            university: '27-29.5 điểm (Y đa khoa), 25-27 (Dược)',
            subjects: 'Toán, Hóa, Sinh (B00)'
        },
        
        salary: {
            entry: '12-18 triệu/tháng (công lập), 15-25 (tư nhân)',
            mid: '25-50 triệu/tháng',
            senior: '60-200+ triệu/tháng'
        },
        
        growth: 'Ổn định, nhu cầu cao đặc biệt sau đại dịch',
        
        positions: [
            'Bác sĩ đa khoa/chuyên khoa',
            'Dược sĩ lâm sàng',
            'Nghiên cứu viên y sinh',
            'Giảng viên y khoa'
        ],
        
        skills: ['Toán', 'Hóa', 'Sinh', 'Logic', 'Anh'],
        
        roadmap: {
            thpt: [
                'Tập trung tổ hợp B00 (Toán, Hóa, Sinh)',
                'Điểm thi phải rất cao (28+)',
                'Năm 1-3: Học lý thuyết y khoa cơ bản',
                'Năm 4-6: Lâm sàng, thực hành bệnh viện',
                'Sau tốt nghiệp: Nội trú 2-3 năm'
            ],
            vocational: [
                'CĐ Điều dưỡng, Y sĩ đa khoa',
                'Học thực hành chăm sóc bệnh nhân',
                'Làm việc tại phòng khám, bệnh viện',
                'Có thể liên thông lên ĐH Điều dưỡng'
            ]
        },
        
        recommendations: [
            'Đọc sách y khoa, theo dõi các tạp chí khoa học',
            'Tham gia tình nguyện y tế',
            'Học tiếng Anh y khoa để đọc tài liệu',
            'Rèn luyện tính kiên nhẫn, tỉ mỉ'
        ]
    },

    'nursing': {
        id: 'nursing',
        name: 'Điều dưỡng & Chăm sóc sức khỏe',
        icon: '🩺',
        category: 'health',
        hollandCode: 'S-I',
        description: 'Điều dưỡng, kỹ thuật y học, chăm sóc người bệnh',
        
        universities: [
            'ĐH Y Dược TP.HCM',
            'ĐH Điều dưỡng Nam Định',
            'ĐH Thăng Long'
        ],
        
        vocational: [
            'CĐ Y tế TP.HCM',
            'CĐ Y tế Hà Nội',
            'CĐ Viễn Đông'
        ],
        
        admissionScore: {
            university: '20-24 điểm',
            subjects: 'Toán, Hóa, Sinh hoặc Toán, Lý, Hóa'
        },
        
        salary: {
            entry: '8-12 triệu/tháng',
            mid: '12-20 triệu/tháng',
            senior: '18-35 triệu/tháng'
        },
        
        growth: 'Nhu cầu cao, đặc biệt điều dưỡng quốc tế',
        
        positions: [
            'Điều dưỡng viên',
            'Kỹ thuật viên y tế',
            'Chăm sóc người cao tuổi',
            'Điều dưỡng quốc tế (Nhật, Đức)'
        ],
        
        skills: ['Sinh', 'Hóa', 'Anh', 'Ngoại ngữ', 'Làm việc nhóm'],
        
        roadmap: {
            thpt: [
                'Tổ hợp B00 hoặc A00',
                'Học tiếng Anh hoặc Nhật, Đức (nếu muốn đi quốc tế)',
                'Năm 1-2: Lý thuyết điều dưỡng cơ bản',
                'Năm 3-4: Thực hành tại bệnh viện'
            ],
            vocational: [
                'Học CĐ Điều dưỡng - thời gian ngắn, dễ xin việc',
                'Thực hành nhiều tại bệnh viện',
                'Thi chứng chỉ điều dưỡng quốc tế (NCLEX, IELTS)',
                'Cơ hội đi làm Nhật, Đức với lương 50-100 triệu/tháng'
            ]
        },
        
        recommendations: [
            'Rèn luyện kỹ năng giao tiếp, chăm sóc',
            'Học tiếng Nhật/Đức nếu muốn xuất khẩu lao động',
            'Tìm hiểu về chăm sóc người cao tuổi',
            'Tham gia các khóa đào tạo kỹ năng mềm'
        ]
    },

    // ========== SÁNG TẠO ==========
    'design-multimedia': {
        id: 'design-multimedia',
        name: 'Thiết kế Đồ họa & Multimedia',
        icon: '🎨',
        category: 'creative',
        hollandCode: 'A-R',
        description: 'Thiết kế đồ họa, UI/UX, Motion Graphics',
        
        universities: [
            'ĐH Mỹ thuật TP.HCM',
            'ĐH Kiến trúc TP.HCM',
            'ĐH Văn Lang',
            'ĐH RMIT'
        ],
        
        vocational: [
            'CĐ Arena Multimedia',
            'CĐ FPT Polytechnic',
            'CĐ Hoa Sen'
        ],
        
        admissionScore: {
            university: '20-25 điểm + thi năng khiếu',
            subjects: 'Tổ hợp tự do + thi vẽ/thiết kế'
        },
        
        salary: {
            entry: '7-12 triệu/tháng',
            mid: '15-30 triệu/tháng',
            senior: '35-80+ triệu/tháng'
        },
        
        growth: 'Tăng 20%/năm nhờ Content Marketing, Gaming',
        
        positions: [
            'UI/UX Designer',
            'Graphic Designer',
            'Motion Graphics Artist',
            'Game Artist',
            'Art Director'
        ],
        
        skills: ['Tư duy sáng tạo', 'Tin', 'Anh', 'Sử dụng AI'],
        
        roadmap: {
            thpt: [
                'Chuẩn bị portfolio vẽ, thiết kế',
                'Thi năng khiếu tại các trường Mỹ thuật',
                'Năm 1-2: Nền tảng mỹ thuật, màu sắc, bố cục',
                'Năm 3-4: Chuyên sâu UI/UX, 3D, Motion, thực tập tại agency'
            ],
            vocational: [
                'Học CĐ Arena - đào tạo thực chiến',
                'Tập trung Adobe Suite: Photoshop, Illustrator, After Effects',
                'Làm freelance, xây dựng portfolio',
                'Tham gia các cuộc thi thiết kế'
            ]
        },
        
        recommendations: [
            'Xây dựng portfolio trên Behance, Dribbble',
            'Học Figma, Adobe XD cho UI/UX',
            'Theo dõi xu hướng thiết kế thế giới',
            'Tham gia cộng đồng designers Việt Nam'
        ]
    },

    'media-journalism': {
        id: 'media-journalism',
        name: 'Báo chí & Truyền thông',
        icon: '📰',
        category: 'creative',
        hollandCode: 'A-E',
        description: 'Báo chí, truyền thông, PR, Content Creator',
        
        universities: [
            'Học viện Báo chí & Tuyên truyền',
            'ĐH KHXH&NV TP.HCM',
            'ĐH Văn Lang',
            'ĐH Hoa Sen'
        ],
        
        vocational: [
            'CĐ Phát thanh Truyền hình',
            'CĐ Văn hóa Nghệ thuật'
        ],
        
        admissionScore: {
            university: '23-27 điểm',
            subjects: 'Toán, Văn, Anh (D01)'
        },
        
        salary: {
            entry: '7-12 triệu/tháng',
            mid: '15-30 triệu/tháng',
            senior: '30-70+ triệu/tháng'
        },
        
        growth: 'Tăng 15%/năm, Content Creator boom',
        
        positions: [
            'Phóng viên',
            'Chuyên viên PR',
            'Content Creator',
            'Social Media Manager',
            'Editor/Biên tập viên'
        ],
        
        skills: ['Văn', 'Anh', 'Giao tiếp', 'Tư duy sáng tạo'],
        
        roadmap: {
            thpt: [
                'Tổ hợp D01 (Toán, Văn, Anh)',
                'Viết blog, tạo content thử nghiệm',
                'Năm 1-2: Nền tảng báo chí, viết lách',
                'Năm 3-4: Thực tập tại VTV, báo Tuổi Trẻ, Thanh Niên'
            ],
            vocational: [
                'Học quay phim, dựng phim cơ bản',
                'Tạo kênh YouTube, TikTok để thực hành',
                'Làm freelance content cho các brand'
            ]
        },
        
        recommendations: [
            'Viết blog cá nhân thường xuyên',
            'Học quay, dựng video với Premiere, Final Cut',
            'Tham gia các cuộc thi viết báo',
            'Đọc nhiều sách, cập nhật tin tức'
        ]
    },

    // ========== DU LỊCH - KHÁCH SẠN ==========
    'tourism-hospitality': {
        id: 'tourism-hospitality',
        name: 'Du lịch & Khách sạn',
        icon: '🏨',
        category: 'creative',
        hollandCode: 'S-E',
        description: 'Quản trị khách sạn, nhà hàng, du lịch',
        
        universities: [
            'ĐH Văn hóa TP.HCM',
            'ĐH Tài chính - Marketing',
            'ĐH Hoa Sen',
            'Học viện Nông nghiệp VN'
        ],
        
        vocational: [
            'CĐ Du lịch Sài Gòn',
            'CĐ Nghề Du lịch TP.HCM',
            'Trường Đào tạo khách sạn Hương Sen'
        ],
        
        admissionScore: {
            university: '20-24 điểm',
            subjects: 'Toán, Văn, Anh'
        },
        
        salary: {
            entry: '6-10 triệu/tháng',
            mid: '12-25 triệu/tháng',
            senior: '30-60 triệu/tháng (quản lý)'
        },
        
        growth: 'Phục hồi mạnh sau COVID, tăng 25%/năm',
        
        positions: [
            'Quản lý khách sạn 5 sao',
            'Tour Guide quốc tế',
            'Bếp trưởng',
            'F&B Manager'
        ],
        
        skills: ['Anh', 'Ngoại ngữ', 'Giao tiếp', 'Làm việc nhóm'],
        
        roadmap: {
            thpt: [
                'Học tiếng Anh giao tiếp tốt',
                'Năm 1-2: Nền tảng quản trị khách sạn, du lịch',
                'Năm 3-4: Thực tập tại Marriott, Sheraton, InterContinental'
            ],
            vocational: [
                'Học kỹ năng phục vụ, quản lý nhà hàng',
                'Hoặc học nghề bếp - Bếp trưởng lương rất cao',
                'Làm thêm tại khách sạn để tích lũy kinh nghiệm'
            ]
        },
        
        recommendations: [
            'Học thêm tiếng Hàn, Nhật, Trung (du khách châu Á nhiều)',
            'Tìm hiểu về văn hóa ẩm thực, lịch sử Việt Nam',
            'Rèn luyện kỹ năng giao tiếp, ứng xử linh hoạt'
        ]
    },

    // ========== GIÁO DỤC ==========
    'education': {
        id: 'education',
        name: 'Sư phạm & Giáo dục',
        icon: '👨‍🏫',
        category: 'creative',
        hollandCode: 'S-A',
        description: 'Giáo viên, giảng viên, tâm lý giáo dục',
        
        universities: [
            'ĐH Sư phạm TP.HCM',
            'ĐH Sư phạm Kỹ thuật TP.HCM',
            'ĐH Sài Gòn',
            'ĐH Văn Lang'
        ],
        
        vocational: [
            'CĐ Sư phạm Trung ương',
            'CĐ Sư phạm miền Nam'
        ],
        
        admissionScore: {
            university: '22-26 điểm',
            subjects: 'Tùy chuyên ngành (Toán, Văn, Anh...)'
        },
        
        salary: {
            entry: '7-12 triệu/tháng (công lập)',
            mid: '12-25 triệu/tháng (tư thục)',
            senior: '20-40 triệu/tháng (giảng viên ĐH)'
        },
        
        growth: 'Ổn định, có nhu cầu đặc biệt giáo viên Anh, Toán',
        
        positions: [
            'Giáo viên THCS/THPT',
            'Giảng viên Đại học',
            'Chuyên viên tâm lý học đường',
            'Giáo viên Anh ngữ tư thục (lương cao)'
        ],
        
        skills: ['Giao tiếp', 'Làm việc nhóm', 'Văn', 'Anh'],
        
        roadmap: {
            thpt: [
                'Chọn tổ hợp theo môn muốn dạy',
                'Năm 1-2: Nền tảng sư phạm, tâm lý học',
                'Năm 3-4: Thực tập giảng dạy tại trường'
            ],
            vocational: [
                'Học CĐ Sư phạm',
                'Có thể liên thông lên ĐH Sư phạm'
            ]
        },
        
        recommendations: [
            'Rèn luyện kỹ năng thuyết trình',
            'Tham gia các câu lạc bộ tình nguyện',
            'Học thêm kỹ năng giáo dục công nghệ',
            'Lấy chứng chỉ TESOL/CELTA nếu dạy Anh'
        ]
    },

    // ========== LUẬT - CHÍNH TRỊ ==========
    'law': {
        id: 'law',
        name: 'Luật & Pháp lý',
        icon: '⚖️',
        category: 'business',
        hollandCode: 'C-I',
        description: 'Luật sư, pháp chế doanh nghiệp, tư vấn luật',
        
        universities: [
            'ĐH Luật TP.HCM',
            'ĐH Kinh tế - Luật',
            'ĐH Luật Hà Nội',
            'ĐH Quốc gia TP.HCM'
        ],
        
        vocational: [
            'CĐ Luật miền Nam'
        ],
        
        admissionScore: {
            university: '25-28 điểm',
            subjects: 'Toán, Văn, Anh hoặc Toán, Sử, Địa'
        },
        
        salary: {
            entry: '10-15 triệu/tháng',
            mid: '20-50 triệu/tháng',
            senior: '60-200+ triệu/tháng (luật sư nổi tiếng)'
        },
        
        growth: 'Ổn định, nhu cầu cao tại doanh nghiệp',
        
        positions: [
            'Luật sư',
            'Chuyên viên pháp chế',
            'Trọng tài thương mại',
            'Tư vấn luật doanh nghiệp'
        ],
        
        skills: ['Văn', 'Anh', 'Logic', 'Giao tiếp'],
        
        roadmap: {
            thpt: [
                'Tổ hợp D01 hoặc C00',
                'Năm 1-3: Học các ngành luật cơ bản',
                'Năm 4-5: Thực tập tại văn phòng luật, tòa án',
                'Sau tốt nghiệp: Thi chứng chỉ hành nghề luật sư'
            ],
            vocational: [
                'Học CĐ Luật - trợ lý pháp lý',
                'Làm việc tại các công ty tư vấn luật'
            ]
        },
        
        recommendations: [
            'Đọc nhiều văn bản pháp luật',
            'Rèn luyện kỹ năng tranh tụng, thuyết trình',
            'Học tiếng Anh pháp lý',
            'Tham gia các moot court, cuộc thi luật'
        ]
    },

    // ========== NGÔN NGỮ ==========
    'languages': {
        id: 'languages',
        name: 'Ngôn ngữ (Anh, Hàn, Nhật, Trung)',
        icon: '🌐',
        category: 'creative',
        hollandCode: 'S-A',
        description: 'Biên phiên dịch, giảng viên ngoại ngữ',
        
        universities: [
            'ĐH KHXH&NV TP.HCM',
            'ĐH Ngoại ngữ - ĐH Quốc gia',
            'ĐH Hoa Sen',
            'ĐH Văn Lang'
        ],
        
        vocational: [
            'CĐ Ngôn ngữ Sài Gòn',
            'CĐ Văn hóa'
        ],
        
        admissionScore: {
            university: '23-27 điểm',
            subjects: 'Toán, Văn, Anh'
        },
        
        salary: {
            entry: '8-15 triệu/tháng',
            mid: '15-35 triệu/tháng',
            senior: '40-100+ triệu/tháng (phiên dịch đồng thời)'
        },
        
        growth: 'Nhu cầu cao, đặc biệt tiếng Hàn, Nhật',
        
        positions: [
            'Biên dịch viên',
            'Phiên dịch viên',
            'Giảng viên ngoại ngữ',
            'Chuyên viên quan hệ quốc tế'
        ],
        
        skills: ['Anh', 'Ngoại ngữ', 'Văn', 'Giao tiếp'],
        
        roadmap: {
            thpt: [
                'Tổ hợp D01',
                'Chọn ngôn ngữ muốn chuyên sâu',
                'Năm 1-2: Nền tảng ngữ pháp, từ vựng',
                'Năm 3-4: Chuyên sâu dịch thuật, thực hành phiên dịch'
            ],
            vocational: [
                'Học CĐ Ngôn ngữ',
                'Lấy chứng chỉ quốc tế: IELTS, JLPT, TOPIK, HSK',
                'Làm freelance dịch thuật'
            ]
        },
        
        recommendations: [
            'Luyện nghe, nói mỗi ngày',
            'Xem phim, đọc sách bằng ngôn ngữ đích',
            'Tham gia cộng đồng người bản xứ',
            'Làm freelance trên Upwork, Fiverr'
        ]
    },

    // ========== XÂY DỰNG ==========
    'construction': {
        id: 'construction',
        name: 'Xây dựng & Kiến trúc',
        icon: '🏗️',
        category: 'tech',
        hollandCode: 'R-I',
        description: 'Kỹ sư xây dựng, kiến trúc sư, quản lý dự án',
        
        universities: [
            'ĐH Kiến trúc TP.HCM',
            'ĐH Bách Khoa TP.HCM',
            'ĐH Xây dựng Hà Nội',
            'ĐH Tôn Đức Thắng'
        ],
        
        vocational: [
            'CĐ Xây dựng TP.HCM',
            'CĐ Công nghệ Thủ Đức'
        ],
        
        admissionScore: {
            university: '23-27 điểm',
            subjects: 'Toán, Lý, Hóa (A00) + thi năng khiếu (Kiến trúc)'
        },
        
        salary: {
            entry: '10-15 triệu/tháng',
            mid: '20-40 triệu/tháng',
            senior: '50-150+ triệu/tháng'
        },
        
        growth: 'Tăng 15%/năm nhờ đô thị hóa',
        
        positions: [
            'Kỹ sư xây dựng',
            'Kiến trúc sư',
            'Quản lý dự án (PM)',
            'Kỹ sư giám sát'
        ],
        
        skills: ['Toán', 'Lý', 'Tin', 'Logic'],
        
        roadmap: {
            thpt: [
                'Tổ hợp A00',
                'Năm 1-2: Nền tảng kết cấu, vật liệu',
                'Năm 3-4: Thiết kế, quản lý dự án, thực tập'
            ],
            vocational: [
                'Học CĐ Xây dựng',
                'Thi chứng chỉ hành nghề',
                'Làm tại các công ty xây dựng'
            ]
        },
        
        recommendations: [
            'Học AutoCAD, Revit, SketchUp',
            'Tham quan công trường xây dựng',
            'Tìm hiểu về vật liệu xây dựng mới'
        ]
    },

    // ========== TÀI CHÍNH - NGÂN HÀNG ==========
    'finance-banking': {
        id: 'finance-banking',
        name: 'Tài chính - Ngân hàng',
        icon: '💰',
        category: 'business',
        hollandCode: 'C-E',
        description: 'Tài chính doanh nghiệp, ngân hàng, đầu tư',
        
        universities: [
            'ĐH Kinh tế TP.HCM (UEH)',
            'ĐH Ngoại thương',
            'ĐH Ngân hàng TP.HCM',
            'ĐH Tài chính - Marketing'
        ],
        
        vocational: [
            'CĐ Tài chính',
            'CĐ Kinh tế Đối ngoại'
        ],
        
        admissionScore: {
            university: '24-28 điểm',
            subjects: 'Toán, Văn, Anh (D01)'
        },
        
        salary: {
            entry: '10-15 triệu/tháng',
            mid: '20-50 triệu/tháng',
            senior: '60-200+ triệu/tháng'
        },
        
        growth: 'Ổn định, nhu cầu cao tại ngân hàng, công ty chứng khoán',
        
        positions: [
            'Chuyên viên tài chính',
            'Chuyên viên tín dụng',
            'Phân tích đầu tư',
            'Kế toán trưởng'
        ],
        
        skills: ['Toán', 'Anh', 'Logic', 'Tin'],
        
        roadmap: {
            thpt: [
                'Tổ hợp D01',
                'Năm 1-2: Nền tảng tài chính, kế toán',
                'Năm 3-4: Chuyên sâu tài chính doanh nghiệp, thực tập ngân hàng'
            ],
            vocational: [
                'Học CĐ Tài chính',
                'Lấy chứng chỉ kế toán, tài chính',
                'Làm việc tại ngân hàng, công ty tài chính'
            ]
        },
        
        recommendations: [
            'Học Excel nâng cao, Power BI',
            'Lấy chứng chỉ CFA, FRM (quốc tế)',
            'Theo dõi thị trường chứng khoán',
            'Đọc sách về đầu tư, tài chính'
        ]
    },

    // ========== NÔNG NGHIỆP CÔNG NGHỆ CAO ==========
    'agritech': {
        id: 'agritech',
        name: 'Nông nghiệp Công nghệ cao',
        icon: '🌾',
        category: 'tech',
        hollandCode: 'R-I',
        description: 'Nông nghiệp thông minh, công nghệ sinh học',
        
        universities: [
            'Học viện Nông nghiệp Việt Nam',
            'ĐH Nông Lâm TP.HCM',
            'ĐH Cần Thơ',
            'ĐH An Giang'
        ],
        
        vocational: [
            'CĐ Nông nghiệp Nam Bộ',
            'CĐ Nông nghiệp TP.HCM'
        ],
        
        admissionScore: {
            university: '18-23 điểm',
            subjects: 'Toán, Hóa, Sinh (B00)'
        },
        
        salary: {
            entry: '7-12 triệu/tháng',
            mid: '15-30 triệu/tháng',
            senior: '35-80 triệu/tháng (chuyên gia)'
        },
        
        growth: 'Tăng 20%/năm nhờ nông nghiệp 4.0',
        
        positions: [
            'Kỹ sư nông nghiệp công nghệ cao',
            'Chuyên viên công nghệ sinh học',
            'Quản lý trang trại thông minh',
            'Chuyên gia trồng trọt organic'
        ],
        
        skills: ['Sinh', 'Hóa', 'Tin', 'Logic'],
        
        roadmap: {
            thpt: [
                'Tổ hợp B00',
                'Năm 1-2: Nền tảng nông học, sinh học',
                'Năm 3-4: Chuyên sâu công nghệ cao, thực tập trang trại'
            ],
            vocational: [
                'Học CĐ Nông nghiệp',
                'Học kỹ thuật trồng trọt, chăn nuôi',
                'Khởi nghiệp trang trại riêng'
            ]
        },
        
        recommendations: [
            'Tìm hiểu về IoT trong nông nghiệp',
            'Học về trồng trọt thủy canh, aquaponics',
            'Tham quan các trang trại công nghệ cao',
            'Khởi nghiệp với mô hình nông nghiệp sạch'
        ]
    }
};

// ==================== SCORE SCALES ====================
const scoresText = [
    "Không thích",
    "Ít thích",
    "Bình thường",
    "Thích",
    "Rất thích"
];

// ==================== TYPE NAMES ====================
const hollandTypeNames = {
    'R': 'Kỹ thuật',
    'I': 'Nghiên cứu',
    'A': 'Nghệ thuật',
    'S': 'Xã hội',
    'E': 'Quản lý',
    'C': 'Quy củ'
};
