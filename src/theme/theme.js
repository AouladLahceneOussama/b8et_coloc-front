export const COLORS = {
    lightGreen:{
        primary:"#4ACC64",
        hover:"#3BA550"
    },
    // darkGreen:"#3BA550",
    bg:"rgba(7,185,43,.09)",
    red:{
        primary:"#E52828",
        hover:"#C10000",
    },
    gray:"#B5B3B3",
    white:"#ffff",
    inputColor:"#F6F6F6",
    primary: "#07B92B",
    darkGreen: "#6D6D6D",
    blue:{
        primary:"#22C2B7",
        hover:"#22C289"
    },
    grey:{
        primary:"#6D6D6D",
        hover:"#A8A6A6"
    }
}

export const FONTS ={
    bigTitle:{ fontSize:25,fontWeight:"bold"},
    title:{ fontSize:20,fontWeight:"bold"},
    smallTitle:{ fontSize:13,fontWeight:"100"},
    btnText:{ fontSize:18,fontWeight:"300"},
    label:{ fontSize:15,fontWeight:"500",color:COLORS.gray},
    input:{ fontSize:15,fontWeight:"500"},
    desc:{ fontWeight:"lighter",fontSize:10,color:COLORS.gray},
}

const theme = { COLORS, FONTS }
export default theme;