let last_time = Array(91).fill('').map((item, idx) => idx);
last_time[0] = '';
let last_time_unit = ['sec', 'min', 'hour'];
let distance = Array(51).fill('').map((item, idx) => idx + 'km');
distance[0] = '';
let group_num = Array(50).fill('').map((item, idx) => (idx + 1) + '组');
let group_freq = Array(101).fill('').map((item, idx) => idx + '次');
group_freq[0] = '';
let jump_times = Array(50).fill('').map((item, idx) => (idx + 1) * 50 + '个');
jump_times.concat(Array(15).fill('').map((item, idx) => (3000 + idx * 500) + '个'));
let weight = Array(101).fill('').map((item, idx) => idx);
weight[0] = '';
let weight_unit = ['kg', 'lbs'];

const action_sets = [
  // 体能
  [{
    "id": 1,
    "body_part": 1,
    "pre_defined": true,
    "label": "慢跑",
    "is_select": false,
    "icon_path": "/static/icon/actions/aerobic/canter.png",
    "picker_range": [last_time, last_time_unit, distance],
    "picker_index": [1, 1, 1]
  }, {
    "id": 2,
    "body_part": 1,
    "pre_defined": true,
    "label": "原地跑步",
    "is_select": false,
    "icon_path": "/static/icon/actions/aerobic/running_on_the_spot.png",
    "picker_range": [last_time, last_time_unit, distance],
    "picker_index": [1, 1, 1]
  }, {
    "id": 3,
    "body_part": 1,
    "pre_defined": true,
    "label": "原地高抬腿",
    "is_select": false,
    "icon_path": "/static/icon/actions/aerobic/place_high_leg_on_the_spot.png",
    "picker_range": [last_time, last_time_unit, group_freq],
    "picker_index": [1, 1, 1]
  },
  {
    "id": 4,
    "body_part": 1,
    "pre_defined": true,
    "label": "快走",
    "is_select": false,
    "icon_path": "/static/icon/actions/aerobic/fast_walking.png",
    "picker_range": [last_time, last_time_unit, distance],
    "picker_index": [1, 1, 1]
  }, {
    "id": 5,
    "body_part": 1,
    "pre_defined": true,
    "label": "椭圆机",
    "is_select": false,
    "icon_path": "/static/icon/actions/aerobic/elliptical_machine.png",
    "picker_range": [last_time, last_time_unit, distance],
    "picker_index": [1, 1, 1]
  }, {
    "id": 6,
    "body_part": 1,
    "pre_defined": true,
    "label": "开合跳",
    "is_select": false,
    "icon_path": "/static/icon/actions/aerobic/jumping_jacks.png",
    "picker_range": [group_num, group_freq, last_time, last_time_unit],
    "picker_index": [1, 1, 1, 1]
  }, {
    "id": 7,
    "body_part": 1,
    "pre_defined": true,
    "label": "动感单车",
    "is_select": false,
    "icon_path": "/static/icon/actions/aerobic/spinning.png",
    "picker_range": [last_time, last_time_unit, distance],
    "picker_index": [1, 1, 1]
  }, {
    "id": 8,
    "body_part": 1,
    "pre_defined": true,
    "label": "登山机",
    "is_select": false,
    "icon_path": "/static/icon/actions/aerobic/climbing.png",
    "picker_range": [last_time, last_time_unit, distance],
    "picker_index": [1, 1, 1]
  }, {
    "id": 9,
    "body_part": 1,
    "pre_defined": true,
    "label": "跳绳",
    "is_select": false,
    "icon_path": "/static/icon/actions/aerobic/rope_skipping.png",
    "picker_range": [last_time, last_time_unit, jump_times],
    "picker_index": [1, 1, 1]
  }, {
    "id": 10,
    "body_part": 1,
    "pre_defined": true,
    "label": "俯身登山",
    "is_select": false,
    "icon_path": "/static/icon/actions/aerobic/bend_over_climbing.png",
    "picker_range": [group_num, group_freq, last_time, last_time_unit],
    "picker_index": [1, 1, 1, 1]
  }
  ],
  // 胸
  [{
    "id": 11,
    "body_part": 2,
    "pre_defined": true,
    "label": "上斜杠铃推举",
    "is_select": false,
    "icon_path": "/static/icon/actions/chest/horizontal_barbell_bench_press.png",
    "picker_range": [group_num, group_freq, weight, weight_unit],
    "picker_index": [1, 1, 1, 1]
  }, {
    "id": 12,
    "body_part": 2,
    "pre_defined": true,
    "label": "上斜哑铃推举",
    "is_select": false,
    "icon_path": "/static/icon/actions/chest/incline_dumbbell_bench_press.png",
    "picker_range": [group_num, group_freq, weight, weight_unit],
    "picker_index": [1, 1, 1, 1]
  }, {
    "id": 13,
    "body_part": 2,
    "pre_defined": true,
    "label": "上斜器械推举",
    "is_select": false,
    "icon_path": "/static/icon/actions/chest/incline_machine_press.png",
    "picker_range": [group_num, group_freq, weight, weight_unit],
    "picker_index": [1, 1, 1, 1]
  },
  {
    "id": 14,
    "body_part": 2,
    "pre_defined": true,
    "label": "平板杠铃卧推",
    "is_select": false,
    "icon_path": "/static/icon/actions/chest/horizontal_barbell_bench_press.png",
    "picker_range": [group_num, group_freq, weight, weight_unit],
    "picker_index": [1, 1, 1, 1]
  }, {
    "id": 15,
    "body_part": 2,
    "pre_defined": true,
    "label": "平板哑铃卧推",
    "is_select": false,
    "icon_path": "/static/icon/actions/chest/horizontal_dumbbell_bench_press.png",
    "picker_range": [group_num, group_freq, weight, weight_unit],
    "picker_index": [1, 1, 1, 1]
  }, {
    "id": 16,
    "body_part": 2,
    "pre_defined": true,
    "label": "坐姿器械推胸",
    "is_select": false,
    "icon_path": "/static/icon/actions/chest/seated_machine_press.png",
    "picker_range": [group_num, group_freq, weight, weight_unit],
    "picker_index": [1, 1, 1, 1]
  }, {
    "id": 17,
    "body_part": 1,
    "pre_defined": true,
    "label": "下斜杠铃推举",
    "is_select": false,
    "icon_path": "/static/icon/actions/chest/horizontal_barbell_bench_press.png",
    "picker_range": [group_num, group_freq, weight, weight_unit],
    "picker_index": [1, 1, 1, 1]
  }, {
    "id": 18,
    "body_part": 1,
    "pre_defined": true,
    "label": "下斜哑铃推举",
    "is_select": false,
    "icon_path": "/static/icon/actions/chest/horizontal_dumbbell_bench_press.png",
    "picker_range": [group_num, group_freq, weight, weight_unit],
    "picker_index": [1, 1, 1, 1]
  }, {
    "id": 19,
    "body_part": 1,
    "pre_defined": true,
    "label": "双杠臂屈伸",
    "is_select": false,
    "icon_path": "/static/icon/actions/chest/dip_on_parallel_bars.png",
    "picker_range": [group_num, group_freq, weight, weight_unit],
    "picker_index": [1, 1, 1, 1]
  }, {
    "id": 20,
    "body_part": 1,
    "pre_defined": true,
    "label": "跪姿俯卧撑",
    "is_select": false,
    "icon_path": "/static/icon/actions/chest/kneel_push_up.png",
    "picker_range": [group_num, group_freq, weight, weight_unit],
    "picker_index": [1, 1, 1, 1]
  }
  ],
  // 背
  [{
    "id": 21,
    "body_part": 3,
    "pre_defined": true,
    "label": "反握宽距引体向上",
    "is_select": false,
    "icon_path": "/static/icon/actions/back/reverse_neutral_grip_pull_up.png",
    "picker_range": [group_num, group_freq, weight, weight_unit],
    "picker_index": [1, 1, 1, 1]
  }, {
    "id": 22,
    "body_part": 3,
    "pre_defined": true,
    "label": "反握窄距引体向上",
    "is_select": false,
    "icon_path": "/static/icon/actions/back/reverse_narrow_pull_up.png",
    "picker_range": [group_num, group_freq, weight, weight_unit],
    "picker_index": [1, 1, 1, 1]
  }, {
    "id": 23,
    "body_part": 3,
    "pre_defined": true,
    "label": "正握宽距引体向上",
    "is_select": false,
    "icon_path": "/static/icon/actions/back/neutral_grip_pull_up.png",
    "picker_range": [group_num, group_freq, weight, weight_unit],
    "picker_index": [1, 1, 1, 1]
  },
  {
    "id": 24,
    "body_part": 3,
    "pre_defined": true,
    "label": "正握窄距引体向上",
    "is_select": false,
    "icon_path": "/static/icon/actions/back/narrow_pull_up.png",
    "picker_range": [group_num, group_freq, weight, weight_unit]
  }, {
    "id": 25,
    "body_part": 3,
    "pre_defined": true,
    "label": "标准高位下拉",
    "is_select": false,
    "icon_path": "/static/icon/actions/back/stand_machine_pull_up.png",
    "picker_range": [group_num, group_freq, weight, weight_unit]
  }, {
    "id": 26,
    "body_part": 3,
    "pre_defined": true,
    "label": "反握高位下拉",
    "is_select": false,
    "icon_path": "/static/icon/actions/back/reverse_cable_pull_up.png",
    "picker_range": [group_num, group_freq, weight, weight_unit]
  }, {
    "id": 27,
    "body_part": 3,
    "pre_defined": true,
    "label": "器械反握下拉",
    "is_select": false,
    "icon_path": "/static/icon/actions/back/reverse_machine_pull_up.png",
    "picker_range": [group_num, group_freq, weight, weight_unit]
  }, {
    "id": 28,
    "body_part": 3,
    "pre_defined": true,
    "label": "反向器械飞鸟",
    "is_select": false,
    "icon_path": "/static/icon/actions/back/reverse_machine_fly.png",
    "picker_range": [group_num, group_freq, weight, weight_unit]
  }, {
    "id": 29,
    "body_part": 3,
    "pre_defined": true,
    "label": "俯身单臂哑铃划船",
    "is_select": false,
    "icon_path": "/static/icon/actions/back/bent_over_one_arm_row.png",
    "picker_range": [group_num, group_freq, weight, weight_unit]
  }, {
    "id": 30,
    "body_part": 3,
    "pre_defined": true,
    "label": "坐姿器械对握划船",
    "is_select": false,
    "icon_path": "/static/icon/actions/back/seated_cable_close_row.png",
    "picker_range": [group_num, group_freq, weight, weight_unit]
  }
  ],
  // 肩
  [{
    "id": 31,
    "body_part": 4,
    "pre_defined": true,
    "label": "颈前杠铃推举",
    "is_select": false,
    "icon_path": "/static/icon/actions/shoulder/bar_military_press.png",
    "picker_range": [group_num, group_freq, weight, weight_unit]

  }, {
    "id": 32,
    "body_part": 4,
    "pre_defined": true,
    "label": "站姿哑单臂铃前平举",
    "is_select": false,
    "icon_path": "/static/icon/actions/shoulder/standing_one_arm_dumbbell_front_press.png",
    "picker_range": [group_num, group_freq, weight, weight_unit]
  }, {
    "id": 33,
    "body_part": 4,
    "pre_defined": true,
    "label": "站姿哑铃前平举",
    "is_select": false,
    "icon_path": "/static/icon/actions/shoulder/standing_dumbbells_front_press.png",
    "picker_range": [group_num, group_freq, weight, weight_unit]
  },
  {
    "id": 34,
    "body_part": 4,
    "pre_defined": true,
    "label": "器械推举",
    "is_select": false,
    "icon_path": "/static/icon/actions/shoulder/machine_press.png",
    "picker_range": [group_num, group_freq, weight, weight_unit]
  }, {
    "id": 35,
    "body_part": 4,
    "pre_defined": true,
    "label": "坐姿哑铃推举",
    "is_select": false,
    "icon_path": "/static/icon/actions/shoulder/seated_dumbbell_press.png",
    "picker_range": [group_num, group_freq, weight, weight_unit]
  }, {
    "id": 36,
    "body_part": 4,
    "pre_defined": true,
    "label": "开合跳",
    "is_select": false,
    "icon_path": "/static/icon/actions/aerobic/jumping_jacks.png",
    "picker_range": [group_num, group_freq, weight, weight_unit]
  }, {
    "id": 37,
    "body_part": 4,
    "pre_defined": true,
    "label": "站姿哑铃推举",
    "is_select": false,
    "icon_path": "/static/icon/actions/shoulder/standing_dumbbell_press.png",
    "picker_range": [group_num, group_freq, weight, weight_unit]
  }, {
    "id": 38,
    "body_part": 4,
    "pre_defined": true,
    "label": "站姿哑铃侧平举",
    "is_select": false,
    "icon_path": "/static/icon/actions/shoulder/standing_dumbbell_lateral_raise.png",
    "picker_range": [group_num, group_freq, weight, weight_unit]
  }, {
    "id": 39,
    "body_part": 4,
    "pre_defined": true,
    "label": "L侧平举",
    "is_select": false,
    "icon_path": "/static/icon/actions/shoulder/L_lateral_raise.png",
    "picker_range": [group_num, group_freq, weight, weight_unit]
  }, {
    "id": 40,
    "body_part": 4,
    "pre_defined": true,
    "label": "俯身哑铃侧平举",
    "is_select": false,
    "icon_path": "/static/icon/actions/shoulder/dumbbell_rear_lateral_raise.png",
    "picker_range": [group_num, group_freq, weight, weight_unit]
  }
  ],
  // 臂
  [{
    "id": 41,
    "body_part": 5,
    "pre_defined": true,
    "label": "站姿杠铃弯举",
    "is_select": false,
    "icon_path": "/static/icon/actions/arm/standing_barbell_biceps_curl.png",
    "picker_range": [group_num, group_freq, weight, weight_unit]
  }, {
    "id": 42,
    "body_part": 5,
    "pre_defined": true,
    "label": "站姿重锤弯举",
    "is_select": false,
    "icon_path": "/static/icon/actions/arm/standing_hammer_curl.png",
    "picker_range": [group_num, group_freq, weight, weight_unit]
  }, {
    "id": 43,
    "body_part": 5,
    "pre_defined": true,
    "label": "坐姿哑铃弯举",
    "is_select": false,
    "icon_path": "/static/icon/actions/arm/seated_dumbbell_biceps_curl.png",
    "picker_range": [group_num, group_freq, weight, weight_unit]
  },
  {
    "id": 44,
    "body_part": 5,
    "pre_defined": true,
    "label": "快走",
    "is_select": false,
    "icon_path": "/static/icon/actions/aerobic/fast_walking.png",
    "picker_range": [group_num, group_freq, weight, weight_unit]
  }, {
    "id": 45,
    "body_part": 5,
    "pre_defined": true,
    "label": "椭圆机",
    "is_select": false,
    "icon_path": "/static/icon/actions/aerobic/elliptical_machine.png",
    "picker_range": [group_num, group_freq, weight, weight_unit]
  }, {
    "id": 46,
    "body_part": 5,
    "pre_defined": true,
    "label": "站姿拉索弯举",
    "is_select": false,
    "icon_path": "/static/icon/actions/arm/standing_cable_curl.png",
    "picker_range": [group_num, group_freq, weight, weight_unit]
  }, {
    "id": 47,
    "body_part": 5,
    "pre_defined": true,
    "label": "仰卧杠铃颈后臂屈伸",
    "is_select": false,
    "icon_path": "/static/icon/actions/arm/lying_barbell_dip.png",
    "picker_range": [group_num, group_freq, weight, weight_unit]
  }, {
    "id": 48,
    "body_part": 5,
    "pre_defined": true,
    "label": "站姿单臂颈后臂屈伸",
    "is_select": false,
    "icon_path": "/static/icon/actions/arm/standing_one_arm_dip.png",
    "picker_range": [group_num, group_freq, weight, weight_unit]
  }, {
    "id": 49,
    "body_part": 5,
    "pre_defined": true,
    "label": "站姿拉索下压",
    "is_select": false,
    "icon_path": "/static/icon/actions/arm/standing_cable_triceps_push_down.png",
    "picker_range": [group_num, group_freq, weight, weight_unit]
  }, {
    "id": 50,
    "body_part": 5,
    "pre_defined": true,
    "label": "器械臂屈伸",
    "is_select": false,
    "icon_path": "/static/icon/actions/arm/machine_dip.png",
    "picker_range": [group_num, group_freq, weight, weight_unit]
  }
  ],
  // 臀腿
  [{
    "id": 51,
    "body_part": 6,
    "pre_defined": true,
    "label": "俯卧器械腿弯举",
    "is_select": false,
    "icon_path": "/static/icon/actions/leg/bent_over_machine_leg_curl.png",
    "picker_range": [group_num, group_freq, weight, weight_unit]
  }, {
    "id": 52,
    "body_part": 6,
    "pre_defined": true,
    "label": "器械腿后展",
    "is_select": false,
    "icon_path": "/static/icon/actions/leg/cable_hamstring_curl.png",
    "picker_range": [group_num, group_freq, weight, weight_unit]
  }, {
    "id": 53,
    "body_part": 6,
    "pre_defined": true,
    "label": "杠铃深蹲",
    "is_select": false,
    "icon_path": "/static/icon/actions/leg/barbell_overhead_squat.png",
    "picker_range": [group_num, group_freq, weight, weight_unit]
  },
  {
    "id": 54,
    "body_part": 6,
    "pre_defined": true,
    "label": "器械哈克深蹲",
    "is_select": false,
    "icon_path": "/static/icon/actions/leg/machine_hack_squat.png",
    "picker_range": [group_num, group_freq, weight, weight_unit]
  }, {
    "id": 55,
    "body_part": 6,
    "pre_defined": true,
    "label": "哑铃深蹲",
    "is_select": false,
    "icon_path": "/static/icon/actions/leg/dumbbell_squat.png",
    "picker_range": [group_num, group_freq, weight, weight_unit]
  }, {
    "id": 56,
    "body_part": 6,
    "pre_defined": true,
    "label": "器械腿举",
    "is_select": false,
    "icon_path": "/static/icon/actions/leg/machine_leg_lift.png",
    "picker_range": [group_num, group_freq, weight, weight_unit]
  }, {
    "id": 57,
    "body_part": 6,
    "pre_defined": true,
    "label": "杠铃翘臀分腿蹲",
    "is_select": false,
    "icon_path": "/static/icon/actions/leg/barbell_one_leg_squat.png",
    "picker_range": [group_num, group_freq, weight, weight_unit]
  }, {
    "id": 58,
    "body_part": 6,
    "pre_defined": true,
    "label": "坐姿腿屈伸",
    "is_select": false,
    "icon_path": "/static/icon/actions/leg/seated_leg_dip.png",
    "picker_range": [group_num, group_freq, weight, weight_unit]
  }, {
    "id": 59,
    "body_part": 6,
    "pre_defined": true,
    "label": "坐姿器械腿外展",
    "is_select": false,
    "icon_path": "/static/icon/actions/leg/seated_machine_leg_split.png",
    "picker_range": [group_num, group_freq, weight, weight_unit]
  }, {
    "id": 60,
    "body_part": 6,
    "pre_defined": true,
    "label": "站姿负重提踵",
    "is_select": false,
    "icon_path": "/static/icon/actions/leg/standing_calf_raise.png",
    "picker_range": [group_num, group_freq, weight, weight_unit]
  }
  ],
  // 腰腹
  [{
    "id": 61,
    "body_part": 7,
    "pre_defined": true,
    "label": "平板支撑",
    "is_select": false,
    "icon_path": "/static/icon/actions/waist/plank.png",
    "picker_range": [group_num, last_time, last_time_unit]
  }, {
    "id": 62,
    "body_part": 7,
    "pre_defined": true,
    "label": "山羊挺身",
    "is_select": false,
    "icon_path": "/static/icon/actions/waist/back_hyperextension.png",
    "picker_range": [group_num, last_time, last_time_unit]
  }, {
    "id": 63,
    "body_part": 7,
    "pre_defined": true,
    "label": "屈膝卷腹",
    "is_select": false,
    "icon_path": "/static/icon/actions/abs/bent_leg_crunch.png",
    "picker_range": [group_num, last_time, last_time_unit]
  },
  {
    "id": 64,
    "body_part": 7,
    "pre_defined": true,
    "label": "反向卷腹",
    "is_select": false,
    "icon_path": "/static/icon/actions/abs/reverse_crunch.png",
    "picker_range": [group_num, last_time, last_time_unit]
  }, {
    "id": 65,
    "body_part": 7,
    "pre_defined": true,
    "label": "器械卷腹",
    "is_select": false,
    "icon_path": "/static/icon/actions/abs/machine_crunch.png",
    "picker_range": [group_num, last_time, last_time_unit]
  }, {
    "id": 66,
    "body_part": 7,
    "pre_defined": true,
    "label": "俄罗斯转体",
    "is_select": false,
    "icon_path": "/static/icon/actions/abs/weighted_russian_twist.png",
    "picker_range": [group_num, last_time, last_time_unit]
  }, {
    "id": 67,
    "body_part": 7,
    "pre_defined": true,
    "label": "V型平衡",
    "is_select": false,
    "icon_path": "/static/icon/actions/abs/v_balance.png",
    "picker_range": [group_num, last_time, last_time_unit]
  }
  ]
];

const body_parts = [
  {
    "id": 1,
    "part": "aerobic",
    "label": "体能",
    "icon_path": "/static/icon/bodyparts/aerobic.png",
    "bkg": "#ccff99",
    "is_active": true,
    "select_count": 0
  }, {
    "id": 2,
    "part": "chest",
    "label": "胸",
    "icon_path": "/static/icon/bodyparts/chest.png",
    "bkg": "#81D4FA",
    "is_active": false,
    "select_count": 0
  }, {
    "id": 3,
    "part": "aerobic",
    "label": "背",
    "icon_path": "/static/icon/bodyparts/back.png",
    "bkg": "#ffff99",
    "is_active": false,
    "select_count": 0
  }, {
    "id": 4,
    "part": "aerobic",
    "label": "肩",
    "icon_path": "/static/icon/bodyparts/shoulder.png",
    "bkg": "#ffcc99",
    "is_active": false,
    "select_count": 0
  }, {
    "id": 5,
    "part": "aerobic",
    "label": "臂",
    "icon_path": "/static/icon/bodyparts/arm.png",
    "bkg": "#a1c4fd",
    "is_active": false,
    "select_count": 0
  }, {
    "id": 6,
    "part": "aerobic",
    "label": "臀腿",
    "icon_path": "/static/icon/bodyparts/legs.png",
    "bkg": "#AC92EC",
    "is_active": false,
    "select_count": 0
  }, {
    "id": 7,
    "part": "aerobic",
    "label": "腰腹",
    "icon_path": "/static/icon/bodyparts/abs.png",
    "bkg": "#fbc2eb",
    "is_active": false,
    "select_count": 0
  }
];

const picker_index_arr = [[{
  id: 1,
  picker_index: [1, 1, 1],
  is_select: false
}, {
  id: 2,
  picker_index: [1, 1, 1],
  is_select: false
}, {
  id: 3,
  picker_index: [1, 1, 1],
  is_select: false
}, {
  id: 4,
  picker_index: [1, 1, 1],
  is_select: false
}, {
  id: 5,
  picker_index: [1, 1, 1],
  is_select: false
}, {
  id: 6,
  picker_index: [1, 1, 1, 1],
  is_select: false
}, {
  id: 7,
  picker_index: [1, 1, 1],
  is_select: false
}, {
  id: 8,
  picker_index: [1, 1, 1],
  is_select: false
}, {
  id: 9,
  picker_index: [1, 1, 1],
  is_select: false
}, {
  id: 10,
  picker_index: [1, 1, 1, 1],
  is_select: false
}],
[{
  id: 11,
  picker_index: [1, 1, 1, 1],
  is_select: false
}, {
  id: 12,
  picker_index: [1, 1, 1, 1],
  is_select: false
}, {
  id: 13,
  picker_index: [1, 1, 1, 1],
  is_select: false
}, {
  id: 14,
  picker_index: [1, 1, 1, 1],
  is_select: false
}, {
  id: 15,
  picker_index: [1, 1, 1, 1],
  is_select: false
}, {
  id: 16,
  picker_index: [1, 1, 1, 1],
  is_select: false
}, {
  id: 17,
  picker_index: [1, 1, 1, 1],
  is_select: false
}, {
  id: 18,
  picker_index: [1, 1, 1, 1],
  is_select: false
}, {
  id: 19,
  picker_index: [1, 1, 1, 1],
  is_select: false
}, {
  id: 20,
  picker_index: [1, 1, 1, 1],
  is_select: false
}], [{
  id: 21,
  picker_index: [1, 1, 1, 1],
  is_select: false
}, {
  id: 22,
  picker_index: [1, 1, 1, 1],
  is_select: false
}, {
  id: 23,
  picker_index: [1, 1, 1, 1],
  is_select: false
}, {
  id: 24,
  picker_index: [1, 1, 1, 1],
  is_select: false
}, {
  id: 25,
  picker_index: [1, 1, 1, 1],
  is_select: false
}, {
  id: 26,
  picker_index: [1, 1, 1, 1],
  is_select: false
}, {
  id: 27,
  picker_index: [1, 1, 1, 1],
  is_select: false
}, {
  id: 28,
  picker_index: [1, 1, 1, 1],
  is_select: false
}, {
  id: 29,
  picker_index: [1, 1, 1, 1],
  is_select: false
}, {
  id: 30,
  picker_index: [1, 1, 1, 1],
  is_select: false
}], [{
  id: 31,
  picker_index: [1, 1, 1, 1],
  is_select: false
}, {
  id: 32,
  picker_index: [1, 1, 1, 1],
  is_select: false
}, {
  id: 33,
  picker_index: [1, 1, 1, 1],
  is_select: false
}, {
  id: 34,
  picker_index: [1, 1, 1, 1],
  is_select: false
}, {
  id: 35,
  picker_index: [1, 1, 1, 1],
  is_select: false
}, {
  id: 36,
  picker_index: [1, 1, 1, 1],
  is_select: false
}, {
  id: 36,
  picker_index: [1, 1, 1, 1],
  is_select: false
}, {
  id: 37,
  picker_index: [1, 1, 1, 1],
  is_select: false
}, {
  id: 38,
  picker_index: [1, 1, 1, 1],
  is_select: false
}, {
  id: 39,
  picker_index: [1, 1, 1, 1],
  is_select: false
}, {
  id: 40,
  picker_index: [1, 1, 1, 1],
  is_select: false
}],
[{
  id: 41,
  picker_index: [1, 1, 1, 1],
  is_select: false
}, {
  id: 42,
  picker_index: [1, 1, 1, 1],
  is_select: false
}, {
  id: 43,
  picker_index: [1, 1, 1, 1],
  is_select: false
}, {
  id: 44,
  picker_index: [1, 1, 1, 1],
  is_select: false
}, {
  id: 45,
  picker_index: [1, 1, 1, 1],
  is_select: false
}, {
  id: 46,
  picker_index: [1, 1, 1, 1],
  is_select: false
}, {
  id: 47,
  picker_index: [1, 1, 1, 1],
  is_select: false
}, {
  id: 48,
  picker_index: [1, 1, 1, 1],
  is_select: false
}, {
  id: 49,
  picker_index: [1, 1, 1, 1],
  is_select: false
}, {
  id: 50,
  picker_index: [1, 1, 1, 1],
  is_select: false
}],
[{
  id: 51,
  picker_index: [1, 1, 1, 1],
  is_select: false
}, {
  id: 52,
  picker_index: [1, 1, 1, 1],
  is_select: false
}, {
  id: 53,
  picker_index: [1, 1, 1, 1],
  is_select: false
}, {
  id: 54,
  picker_index: [1, 1, 1, 1],
  is_select: false
}, {
  id: 55,
  picker_index: [1, 1, 1, 1],
  is_select: false
}, {
  id: 56,
  picker_index: [1, 1, 1, 1],
  is_select: false
}, {
  id: 57,
  picker_index: [1, 1, 1, 1],
  is_select: false
}, {
  id: 58,
  picker_index: [1, 1, 1, 1],
  is_select: false
}, {
  id: 59,
  picker_index: [1, 1, 1, 1],
  is_select: false
}, {
  id: 60,
  picker_index: [1, 1, 1, 1],
  is_select: false
}],
[{
  id: 61,
  picker_index: [1, 1, 1],
  is_select: false
}, {
  id: 62,
  picker_index: [1, 1, 1],
  is_select: false
}, {
  id: 63,
  picker_index: [1, 1, 1],
  is_select: false
}, {
  id: 64,
  picker_index: [1, 1, 1],
  is_select: false
}, {
  id: 65,
  picker_index: [1, 1, 1],
  is_select: false
}, {
  id: 66,
  picker_index: [1, 1, 1, 1],
  is_select: false
}, {
  id: 67,
  picker_index: [1, 1, 1],
  is_select: false
}],

];

module.exports = {
  action_sets,
  body_parts,
  picker_index_arr
}