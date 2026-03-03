const quotationItems = [
    { name: "แผงวงจรแรม (RAM) 8GB", amount: 2, price: 950 },
    { name: "เปลี่ยนหน้าจอ 15.6 นิ้ว", amount: 1, price: 2500 },
    { name: "ชุดแป้นพิมพ์ (Keyboard)", amount: 4, price: 800 },
    { name: "ค่าบริการซ่อม/ตรวจสอบ", amount: 1, price: 500 }
];

const repairRequestData = {
    name: "กำไม่บัง บุญไม่มี",
    phone: "069-676-6677",
    address: "123 หมู่ 4 ต.บัง อ.ลาดบัง จ.ลาดกระบัง 69696",
    device: "โน้ตบุ๊ก Asus ROG",
    problem: "แรมสบัด จอเสีย แป้นพิมพ์หลุด",
    date: "4 มี.ค. 2026",
    time: "10:00 - 12:00 น."
};

const queueImagesFromDB = {
    before: [
        "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=200&h=200&fit=crop", 
        "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=200&h=200&fit=crop"
    ],
    arrive: [
        "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=200&h=200&fit=crop"
    ],
    during: [
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=200&h=200&fit=crop",
    ],
    after: []
};

const allStages = [
    { title: "รับคำขอซ่อมเรียบร้อยแล้ว", desc: "ทางร้านจะติดต่อกลับเพื่อยืนยันรายละเอียดและนัดรับเครื่องครับ", color: "#e6442e", },
    { title: "กำลังไปรับเครื่อง", desc: "กำลังเดินทางไปรับเครื่องตามเวลานัดหมาย จะทำการโทรแจ้งก่อนถึงประมาณ 10-15 นาทีครับ", color: "#f7762b" },
    { title: "รับเครื่องแล้ว", desc: "กำลังดำเนินการนำเครื่องเข้าร้านเพื่อทำการตรวจเช็คปัญหา", color: "#2983d8" },
    { title: "เครื่องถึงร้าน", 
        desc: "เครื่องถึงร้านเรียบร้อยแล้ว เตรียมนำเข้าคิวรอตรวจเช็คปัญหา", 
        color: "#79d163", 
        extraHTML: `<button class="btn btn-sm btn-outline-secondary mt-1 w-40" onclick="showPhotoModal()" style="border-radius: 20px; background-color:#09348a; color: white"><i class="fa-solid fa-file-image"></i> คลิกเพื่อดูรูปภาพ</button>` },
    { title: "รอเช็คปัญหา", desc: "", color: "#775adf" },
    { title: "ตรวจเช็คปัญหา", 
        desc: "เมื่อได้สาเหตุและแนวทางการซ่อม ทางร้านจะแจ้งรายละเอียดพร้อมราคาให้ทราบครับ",
        color: "#2983d8",
        technician: "บุณมี กำบัง",},
        // extraHTML: `<button class="btn btn-sm btn-outline-secondary mt-1 w-40" style="border-radius: 10px; background-color:#286aee; color: white"><i class="fa-solid fa-search"></i> คลิกเพื่อดูช่างที่รับผิดชอบ</button>` },
    { title: "ได้รับใบเสนอราคา", 
        desc: "รบกวนลูกค้ายืนยันเพื่อให้ร้านดำเนินการซ่อมต่อได้ครับ", 
        color: "#e6442e",
        extraHTML: `<button class="btn btn-sm btn-outline-secondary mt-1 w-40" onclick="showQuotationModal()" style="border-radius: 20px; background-color:#09348a; color: white"><i class="fa-solid fa-list-alt"></i> คลิกเพื่อดูรายละเอียดใบเสนอราคา</button>` },
    { title: "ชำระเงินแล้ว", 
        desc: "ได้รับการทำระเงินเรียบร้อยแล้ว ทางร้านจะดำเนินการซ่อมทันทีครับ", 
        color: "#79d163",
        technician: "กำบัง บุณไม่มี",
        queueLeft: 3,},
    { title: "กำลังซ่อม", 
        desc: "ขณะนี้กำลังดำเนินการซ่อมอยู่ หากเสร็จแล้วจะแจ้งให้ทราบทันทีครับ", 
        color: "#2983d8",
        expectDate: "1/2/2003",
        technician: "มีบุณ แต่เป็นบัง",
    },
    { title: "ซ่อมเสร็จแล้ว", desc: 
        "ผ่านการทดสอบเบื้องต้น พร้อมส่งคืนให้ลูกค้าครับ", 
        color: "#79d163",
        extraHTML: `
            <div>
                <button class="btn btn-sm btn-outline-secondary mt-1 w-40" onclick="window.location.href='return.html'" style="border-radius: 20px; background-color:#286aee; color: white">
                    <i class="fa fa-book"></i> คลิกเพื่อกรอกรายละเอียดส่งเครื่องคืน
                </button>
            </div>
            <div>
                <button class="btn btn-sm btn-outline-secondary mt-1 w-40" onclick="showPhotoModal()" style="border-radius: 20px; background-color:#09348a; color: white">
                    <i class="fa-solid fa-file-image"></i> คลิกเพื่อดูรูปภาพ
                </button>
            </div>`,
        },
    { title: "กำลังส่งเครื่องกลับ", 
        desc: "กำลังจัดส่งให้ลูกค้า จะถึงตามเวลานัดหมาย", 
        color: "#f7762b",
        extraHTML: `<button class="btn btn-sm btn-outline-secondary mt-1 w-40" onclick="simulateNextStep()" style="border-radius: 20px; background-color:#f7762b; color: white"><i class="fa fa-check"></i> คลิกเพื่อยืนยันการรับเครื่อง </button>`,         
        },
    { title: "ลูกค้ากดรับเครื่องแล้ว", desc: "ขอบคุณที่ใช้บริการครับ หากมีปัญหาหลังซ่อม สามารถติดต่อร้านได้ทันที", color: "#79d163" },
];

let currentStageIndex = 1; 

function renderTimeline() {
    let timelineHTML = "";

    let currentActiveColor = allStages[currentStageIndex - 1].color;
    
    for (let i = 0; i < currentStageIndex; i++) {
        let isLastStep = (i === currentStageIndex - 1);
        let statusClass = isLastStep ? "active" : "completed";
        let dotStyle = isLastStep ? `background-color: ${currentActiveColor};` : '';
        let extraContent = "";
        // let extraContent = (isLastStep && allStages[i].extraHTML) ? allStages[i].extraHTML : '';
        // let textStyle = isLastStep ? `color: ${currentActiveColor};` : '';

        if (isLastStep) {
            if (allStages[i].queueLeft !== undefined) {
                extraContent = `
                <div>
                    <div style="margin-top: -5px;">
                        <span style="font-size: 13px; color: #154388;">
                            <strong>จำนวนคิว : </strong>
                            <light style="color: #154388;">${allStages[i].queueLeft} คิว</light>
                        </span>
                    </div>
                    <div style="margin-top: -10px;">
                        <span style="font-size: 13px; color: #154388;">
                            <strong>ช่างที่รับผิดชอบ : </strong>
                            <light style="color: #154388;">${allStages[i].technician}</light>
                        </span>
                    <button class="btn btn-sm btn-outline-secondary mt-1 w-10" style="border-radius: 50%; background-color:#09348a; color: white;"><i class="fa-solid fa-search"></i></button>
                    </div>
                </div>`;
            } 
            else if (allStages[i].expectDate !== undefined) {
                extraContent = `
                <div>
                    <div style="margin-top: -5px;">
                        <span style="font-size: 13px; color: #154388;">
                            <strong>วันที่คาดว่าจะเสร็จ : </strong>
                            <light style="color: #154388;">${allStages[i].expectDate}</light>
                        </span>
                    </div>
                    <div style="margin-top: -10px;">
                        <span style="font-size: 13px; color: #154388;">
                            <strong>ช่างที่รับผิดชอบ : </strong>
                            <light style="color: #154388;">${allStages[i].technician}</light>
                        </span>
                    <button class="btn btn-sm btn-outline-secondary mt-1 w-10" style="border-radius: 50%; background-color:#09348a; color: white;"><i class="fa-solid fa-search"></i></button>
                    </div>
                    <div style="margin-top: 0px;">
                        <button class="btn btn-sm btn-outline-secondary mt-1 w-40" onclick="showPhotoModal()" style="border-radius: 20px; background-color:#09348a; color: white"><i class="fa-solid fa-file-image"></i> คลิกเพื่อดูรูปภาพ</button>
                    </div>
                </div>`;
            } 
            else if (allStages[i].technician !== undefined) {
                extraContent = `
                <div style="margin-top: -10px;">
                    <span style="font-size: 13px; color: #154388;">
                        <strong>ช่างที่รับผิดชอบ : </strong>
                        <light style="color: #154388;">${allStages[i].technician}</light>
                    </span>
                    <button class="btn btn-sm btn-outline-secondary mt-1 w-10" style="border-radius: 50%; background-color:#09348a; color: white;"><i class="fa-solid fa-search"></i></button>
                </div>`;
            }
            else if (allStages[i].extraHTML) {
                extraContent = allStages[i].extraHTML;
            }
        }

        timelineHTML += `
            <div class="timeline-step ${statusClass}">
                <div class="timeline-dot" style="${dotStyle}"></div>
                <div class="timeline-title">${allStages[i].title}</div>
                <div class="timeline-desc ${isLastStep ? 'text-black fw-bold' : ''}">${allStages[i].desc}</div>
                ${extraContent}
            </div>
        `;
    }

    // let linePercent = currentStageIndex === 1 ? 0 : ((currentStageIndex - 1) / (allStages.length - 1)) * 100;
    let blueLineHTML = `<div class="timeline-progress" id="blueLine" style="height: 0px;"></div>`;
    document.getElementById("timelineBox").innerHTML = blueLineHTML + timelineHTML;
    let activeSteps = document.querySelectorAll(".timeline-step");
    let lastStepElement = activeSteps[activeSteps.length - 1];

    if (lastStepElement) {
        let exactHeight = lastStepElement.offsetTop + 14;
        setTimeout(() => {
            document.getElementById("blueLine").style.height = exactHeight + "px";
        }, 50);
    }

    document.getElementById("timelineBox").innerHTML = blueLineHTML + timelineHTML;
}

function simulateNextStep() {
    if (currentStageIndex < allStages.length) {
        currentStageIndex++; 
        renderTimeline();    
    } else {
        alert("กระบวนการเสร็จสมบูรณ์แล้ว!");
    }
}

function loadRequestDetails() {
    document.getElementById("modalName").innerText = repairRequestData.name;
    document.getElementById("modalPhone").innerText = repairRequestData.phone;
    document.getElementById("modalAddress").innerText = repairRequestData.address;
    document.getElementById("modalDevice").innerText = repairRequestData.device;
    document.getElementById("modalProblem").innerText = repairRequestData.problem;
    document.getElementById("modalDate").innerText = repairRequestData.date;
    document.getElementById("modalTime").innerText = repairRequestData.time;
}

function renderGallery(containerId, imagesArray) {
    const container = document.getElementById(containerId);
    let html = "";

    if (!imagesArray || imagesArray.length === 0) {
        container.innerHTML = `<div class="col-12"><p class="text-muted mb-0" style="font-size: 12px; font-style: italic;">ยังไม่มีรูปภาพในขั้นตอนนี้</p></div>`;
        return;
    }

    imagesArray.forEach(imgUrl => {
        html += `
            <div class="col-4">
                <img src="${imgUrl}" class="img-fluid rounded shadow-sm" style="height: 80px; width: 100%; object-fit: cover; border: 1px solid #ddd;" alt="รูปภาพประกอบ">
            </div>
        `;
    });

    container.innerHTML = html;
}

function showPhotoModal() {
    renderGallery("gallery-before", queueImagesFromDB.before);
    renderGallery("gallery-arrive", queueImagesFromDB.arrive);
    renderGallery("gallery-during", queueImagesFromDB.during);
    renderGallery("gallery-after", queueImagesFromDB.after);

    const photoModal = new bootstrap.Modal(document.getElementById('imageModal'));
    photoModal.show();
}

function scrollGallery(containerId, direction) {
    const container = document.getElementById(containerId);
    const scrollAmount = 120;
    
    if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}

function renderGallery(containerId, imagesArray) {
    const container = document.getElementById(containerId);
    let html = "";

    if (!imagesArray || imagesArray.length === 0) {
        container.innerHTML = `<div class="w-100"><p class="text-muted mb-0" style="font-size: 12px; font-style: italic;">ยังไม่มีรูปภาพในขั้นตอนนี้</p></div>`;
        return;
    }

    imagesArray.forEach(imgUrl => {
        html += `
            <div style="flex: 0 0 auto; width: 100px;">
                <img src="${imgUrl}" class="img-fluid rounded shadow-sm" style="height: 80px; width: 100%; object-fit: cover; border: 1px solid #ddd;" alt="รูปภาพประกอบ">
            </div>
        `;
    });

    container.innerHTML = html;
}

function showQuotationModal() {
    // 1. Fill basic data
    document.getElementById("quoteName").innerText = repairRequestData.name;
    document.getElementById("quoteDevice").innerText = repairRequestData.device;
    document.getElementById("quoteProblem").innerText = repairRequestData.problem;
    document.getElementById("quoteDate").innerText = repairRequestData.date;

    // 2. Build the table rows and calculate total
    const tableBody = document.getElementById("quoteTableBody");
    let tableHtml = "";
    let totalCost = 0;

    quotationItems.forEach(item => {
        tableHtml += `
            <tr>
                <td class="pt-3 text-start">${item.name}</td>
                <td class="pt-3 text-center">${item.amount}</td>
                <td class="pt-3 text-center">${item.price.toLocaleString()}</td>
                <td class="pt-3 text-center">${item.price*item.amount}</td>
            </tr>
        `;
        totalCost += (item.amount * item.price);
    });

    // 3. Inject rows and total into HTML
    tableBody.innerHTML = tableHtml;
    document.getElementById("quoteTotalCost").innerText = totalCost.toLocaleString();

    // 4. Trigger the Bootstrap modal to open
    const quoteModal = new bootstrap.Modal(document.getElementById('quotationModal'));
    quoteModal.show();
}

loadRequestDetails();
renderTimeline();