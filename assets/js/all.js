
let data = [
    {
        "id": 0,
        "name": "肥宅心碎賞櫻3日",
        "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
        "area": "高雄",
        "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
        "group": 87,
        "price": 1400,
        "rate": 10
    },
    {
        "id": 1,
        "name": "貓空纜車雙程票",
        "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        "area": "台北",
        "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
        "group": 99,
        "price": 240,
        "rate": 2
    },
    {
        "id": 2,
        "name": "台中谷關溫泉會1日",
        "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        "area": "台中",
        "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
        "group": 20,
        "price": 1765,
        "rate": 7
    }
];
let myData=data;


// 抓取填寫資料內容
const packName = document.querySelector("#packName");
const packUrl = document.querySelector("#packUrl");
const areaOptions = document.querySelector("#areaOptions");
const packMoney = document.querySelector("#packMoney");
const packNum = document.querySelector("#packNum");
const packStar = document.querySelector("#packStar");
const packTextArea = document.querySelector("#packTextArea");

// 新增資料按鈕
const addClickBtn = document.querySelector("#addData");
addClickBtn.addEventListener("click",function(e){
    addData(packName.value, packUrl.value, areaOptions.value, packMoney.value, packNum.value, packStar.value, packTextArea.value);
})

// 地區搜尋選項
const areaSelect = document.querySelector(".areaSelect");
areaSelect.addEventListener("change",function(){
    seachData();
});


// 收尋資料
function seachData(){
    myData=[];
    data.forEach(function(item,index){
        if(areaSelect.value == item.area){
            myData.push(item);
        } else if(areaSelect.value == ""){
            myData = data;
        }
    });
    travelData(myData);
    searchNum();
}

// 搜尋計數器
function searchNum(){
    const dataNum = document.querySelector(".searchNum");
    let str=`<h6>本次搜尋共 ${myData.length} 筆資料</h6>`;
    dataNum.innerHTML=str;
}

// 呈現各風景資料
function travelData(data) {
    let str = "";
    const list = document.querySelector("#showData");
    data.forEach(function (item, index) {
        let content = `<li class="col-4 mb-4">
    <div class="card h-100 headerBorder">
        <img src="${item.imgUrl}" class="card-img-top imgBorder">
        <div class="areaBox">${item.area}</div>
        <div class="starBox">${item.rate}</div>
        <div class="card-body d-flex flex-column justify-content-between">
          <div class="mb-4">
            <h4 class="card-title text-primary borderLine3 pb-2 mb-3">${item.name}</h4>
            <p class="card-text text-dark">${item.description}</p>
          </div>
          <div class="d-flex justify-content-between text-primary">
            <div class="d-flex align-items-center"><i class="fas fa-exclamation-circle h5 mr-1 mb-0"></i>剩下最後 ${item.group} 組</div>
            <div class="d-flex align-items-center ">TWD<h2 class="mb-0 ml-1">$${item.price}</h2></div>
          </div>
        </div>
      </div>
</li>`;
        str += content;
    });
    list.innerHTML = str;
};

// 新增資料
function addData(packName,packUrl,areaOptions,packMoney, packNum,packStar,packTextArea){
    if (packName == "" || packUrl=="" || areaOptions =="地區搜尋" || packMoney ==""  || packNum =="" ||packStar ==""||packTextArea =="") {  //資料檢查
        alert('所有欄位都要填寫！');
        return;
    }
    let newData={};
    newData.id = data.length;
    newData.name = packName;
    newData.imgUrl = packUrl;
    newData.area = areaOptions;
    newData.description = packTextArea;
    newData.group = packNum;
    newData.price = packMoney;
    newData.rate = packStar;
    data.push(newData);
    seachData();
    // 執行清除資料
    clearNewData();
};

// 清除資料
function clearNewData(){
    packName.value = "";
    packUrl.value = "";
    packMoney.value="";
    packNum.value = "";
    packStar.value = "";
    packTextArea.value="";
}

travelData(myData);
searchNum();