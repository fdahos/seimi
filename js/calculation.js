const past_event = () => {
  let time = new Date("2023/12/29 17:55:00");
  let schedule = [
    [false, "チェックイン", "16:00", new Date("2023/12/29 16:00:00")],
    [false, "志ほ川集合", "17:50", new Date("2023/12/29 17:50:00")],
    [false, "食事", "18:00", new Date("2023/12/29 18:00:00")],
    [false, "ホテル", "20:00", new Date("2023/12/29 20:00:00")],
  ];
  for (let i = 0; i < schedule.length - 1; i++) {
    if (schedule[i][3] <= time) {
      schedule[i][0] = true;
    }
  }
  return schedule;
};

const now_event = () => {
  let time = new Date("2023/12/29 17:55:00");
  let result = "準備中";
  let schedule = [
    ["ホテル", new Date("2023/12/29 20:00:00")],
    ["食事", new Date("2023/12/29 18:00:00")],
    ["志ほ川集合", new Date("2023/12/29 17:50:00")],
    ["チェックイン", new Date("2023/12/29 16:00:00")],
  ];
  for (let i = 0; i < schedule.length - 1; i++) {
    if (schedule[i][1] <= time) {
      result = schedule[i][0];
      break;
    }
  }
  return result;
};
