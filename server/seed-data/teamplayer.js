import * as xlsx from 'xlsx'

const nameplayer = [
  "Nguyễn Văn A",
  "Lê Văn B",
  "Phạm Văn C",
  "Trần Văn D",
  "Nguyễn Văn E",
  "Lê Văn F",
  "Phạm Văn G",
  "Trần Văn H",
  "Nguyễn Văn I",
  "Lê Văn J",
  "Phạm Văn K",
  "Nguyễn Văn L",
  "Lê Văn M",
  "Phạm Văn N",
  "Trần Văn O",
  "Nguyễn Văn P",
  "Lê Văn Q",
  "Phạm Văn R",
  "Trần Văn S",
  "Nguyễn Văn T",
  "Lê Văn U",
  "Nguyễn Văn V",
  "Lê Văn W",
  "Phạm Văn X",
  "Trần Văn Y",
  "Nguyễn Văn Z",
  "Đặng Văn L",
  "Bùi Văn T",
  "Vũ Văn T",
  "Nguyễn Văn M",
  "Lê Văn D",
  "Phạm Văn T",
  "Trần Văn H",
  "Nguyễn Văn L",
  "Lê Văn M",
  "Phạm Văn N",
  "Trần Văn O",
  "Nguyễn Văn P",
  "Lê Văn Q",
  "Phạm Văn R",
  "Trần Văn S",
  "Nguyễn Văn T",
  "Lê Văn U",
  "Nguyễn Văn V",
  "Lê Văn W",
  "Phạm Văn X",
  "Trần Văn Y",
  "Nguyễn Văn Z",
  "Đặng Văn L",
  "Bùi Văn T",
  "Vũ Văn T",
  "Nguyễn Văn M",
  "Lê Văn D",
  "Phạm Văn T",
  "Trần Văn H",
  "Nguyễn Văn L",
  "Lê Văn M",
  "Phạm Văn N",
  "Trần Văn O",
  "Nguyễn Văn P",
  "Lê Văn Q",
  "Phạm Văn R",
  "Trần Văn S",
  "Nguyễn Văn T",
  "Lê Văn U",
  "Nguyễn Văn V",
  "Lê Văn W",
  "Phạm Văn X",
  "Trần Văn Y",
  "Nguyễn Văn Z",
  "Đặng Văn L",
  "Bùi Văn T",
  "Vũ Văn T",
  "Nguyễn Văn M",
  "Lê Văn D",
  "Phạm Văn T",
  "Trần Văn H",
  "Nguyễn Văn L",
  "Lê Văn M",
  "Phạm Văn N",
  "Trần Văn O",
  "Nguyễn Văn P",
  "Lê Văn Q",
  "Phạm Văn R",
  "Trần Văn S",
  "Nguyễn Văn T",
  "Lê Văn U",
  "Nguyễn Văn V",
  "Lê Văn W",
  "Phạm Văn X",
  "Trần Văn Y",
  "Nguyễn Văn Z",
  "Đặng Văn L",
  "Bùi Văn T",
  "Vũ Văn T",
  "Nguyễn Văn M",
  "Lê Văn D",
  "Phạm Văn T",
  "Trần Văn H",
  "Nguyễn Văn L",
  "Đặng Văn L",
  "Bùi Văn T",
  "Vũ Văn T",
  "Nguyễn Văn M",
  "Lê Văn D",
  "Phạm Văn T",
  "Trần Văn H",
  "Nguyễn Văn L",
  "Lê Văn M",
  "Phan Văn M",
  "Phạm Văn N",
  "Trần Văn O",
  "Nguyễn Văn P",
  "Lê Văn Q",
  "Phạm Văn R",
  "Trần Văn S",
  "Nguyễn Văn T",
  "Lê Văn U",
  "Nguyễn Văn V",
  "Lê Văn W",
  "Phạm Văn X",
  "Trần Văn Y",
  "Nguyễn Văn Z",
  "Đặng Văn L",
  "Bùi Văn T",
  "Vũ Văn T",
  "Nguyễn Văn M",
  "Lê Văn D",
  "Phạm Văn T",
  "Trần Văn H",
  "Nguyễn Văn L",
  "Lê Văn M",
  "Phạm Văn N",
  "Trần Văn O",
  "Nguyễn Văn P",
  "Lê Văn Q",
  "Phạm Văn R",
  "Trần Văn S",
  "Nguyễn Văn T",
  "Lê Văn U",
  "Nguyễn Văn V",
  "Lê Văn W",
  "Phạm Văn X",
  "Trần Văn Y",
  "Nguyễn Văn Z",
  "Đặng Văn L",
  "Bùi Văn T",
  "Vũ Văn T",
  "Nguyễn Văn M",
  "Lê Văn D",
  "Phạm Văn T",
  "Trần Văn H",
  "Nguyễn Văn L",
  "Lê Văn M",
  "Phạm Văn N",
  "Trần Văn O",
  "Nguyễn Văn P",
  "Lê Văn Q",
  "Phạm Văn R",
  "Trần Văn S",
  "Nguyễn Văn T",
  "Lê Văn U",
  "Nguyễn Văn V",
  "Lê Văn W",
  "Phạm Văn X",
  "Trần Văn Y",
  "Nguyễn Văn Z",
  "Đặng Văn L",
  "Bùi Văn T",
  "Vũ Văn T",
  "Nguyễn Văn M",
  "Lê Văn D",
  "Phạm Văn T",
  "Trần Văn H",
  "Nguyễn Văn L",
  "Lê Văn M",
];

// Sơ đồ 4-4-2:

// 4 hậu vệ, 4 tiền vệ, 2 tiền đạo.
// Sơ đồ 4-3-3:

// 4 hậu vệ, 3 tiền vệ, 3 tiền đạo.
// Sơ đồ 3-5-2:

// 3 hậu vệ, 5 tiền vệ, 2 tiền đạo.
// Sơ đồ 4-2-3-1:

// 4 hậu vệ, 2 tiền vệ phòng ngự, 3 tiền vệ tấn công, 1 tiền đạo.
const position = [
  "Thủ môn",
  "Hậu vệ",
  "Hậu vệ",
  "Hậu vệ",
  "Hậu vệ",
  "Tiền vệ",
  "Tiền vệ",
  "Tiền vệ",
  "Tiền vệ",
  "Tiền đạo",
  "Tiền đạo",
];

const team = [
  "team 01",
  "team 02",
  "team 03",
  "team 04",
  "team 05",
  "team 06",
  "team 07",
  "team 08",
  "team 09",
  "team 10",
  "team 11",
  "team 12",
  "team 13",
  "team 14",
  "team 15",
  "team 16",
];

function generateRandomBirthdate(minAge, maxAge) {
  const today = new Date();
  const minDate = new Date(
    today.getFullYear() - maxAge,
    today.getMonth(),
    today.getDate()
  );
  const maxDate = new Date(
    today.getFullYear() - minAge,
    today.getMonth(),
    today.getDate()
  );
  const randomDate = new Date(
    minDate.getTime() + Math.random() * (maxDate.getTime() - minDate.getTime())
  );
  // Format the random date to dd/mm/yy
  const formattedDate = randomDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return formattedDate;
}
// tên đội
// tên - sđt - emaill -số áo - vị trí - ngày sinh
const data = [["nameteam", "players", "age", "phonenumber", "email","contact"]];
var count = 0;
var teamcount = 0;
var playteam = "";
var row = "";
var positioncount = 0;
for (let index = 0; index < 176; index++) {
  let email = "email" + index + "@gmail.com";
  playteam +=
    nameplayer[index] +
    "-" +
    "0123456789" +
    "-" +
    email +
    "-" +
    index
    + "-"
    +position[positioncount] +
    "-" +
    generateRandomBirthdate(20, 25) +
    ",";

  row += playteam;
  count++;
  positioncount++;
  if (positioncount === 11) {
    positioncount = 0;
    const newData = row.slice(0, -1);
    let datatemp = [team[teamcount], newData, "20-25", "0123456789", "TruongPham@gmail.com","TruongPham"];
    data.push(datatemp);
    row = "";
    teamcount++;
  }
  playteam = "";
}

console.log(data);
// Tạo workbook
const wb = xlsx.utils.book_new();

// Thêm dữ liệu vào worksheet
const ws = xlsx.utils.aoa_to_sheet(data);

// Thêm worksheet vào workbook
xlsx.utils.book_append_sheet(wb, ws, "Sheet1");

// Lưu workbook thành file Excel
xlsx.writeFile(wb, "team-player.xlsx");
