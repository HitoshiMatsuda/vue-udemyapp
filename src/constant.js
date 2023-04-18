// 定数クラス
export default Object.freeze({
    // App共通
    commonObj: {
        appTitle: "Udemy App",
        userInfoTitle: "プロフィール",
        userFirstName: "Tanaka",
        userLastName: "Taro",
        age: 20,
        tall: 180
    },
    // FormWidget
    formWidgetObj: {
        checkBoxWidgetConstant: {
            checkBoxTitle: "CheckBox",
            checkFlag: false,
            checkFlagList:[],
            multiCheckBoxTitle: "MultiCheckBox",
            value10:10,
            value20:20,
            value30:30
        },
        inputFormWidgetConstant: {
            inputFormTitle: "InputForm",
            inputFormLabel0: "タイトル",
            inputFormLabel1: "ここに記載してください",
            inputFormLabel2: "イベントの内容",
            inputDetailForm: "",
        },
        radioButtonWidgetConstant: {
            radioButtonTile: "RadioButton",
            radioFlag: "無料",
            freeText:"無料",
            feeText:"有料"
        },
        selectButtonWidgetConstant: {
            selectButtonTitle: "SelectButton",
            prefectures: ["tokyo","osaka","kyoto","fukui","okinawa","hokkaido"],
            prefecture: ""
        }
    }
  });
