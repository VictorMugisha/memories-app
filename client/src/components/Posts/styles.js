import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    mainContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    smMargin: {
        margin: theme.spacing(1),
    },
    actionDiv: {
        textAlign: 'center',
    },
}));


function a(arr) {
    if (arr.length === 0) return 0
    const firstElement = arr[0]
    const newArray = arr.slice(1)
    return firstElement + a (newArray)
}