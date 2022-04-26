import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles({ 
    navbar:{
        backgroundColor: '#203040',
        '& a':{
            color:'#FFFFFF',
            marginLeft: '10px',
            textDecoration: 'none',
        }
    },
    main: {
        minHeight: '80vh',
    },
    footer: {
        textAlign: 'center',
        padding: '10px',
    }

});

export default useStyles
