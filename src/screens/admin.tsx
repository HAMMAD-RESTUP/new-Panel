import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import MailIcon from '@mui/icons-material/Mail';
// import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import BAButton from '../component/BAButton';
import { useNavigate } from "react-router-dom";
import { BrowserRouter ,Route, Router,Routes } from 'react-router-dom';
import { useState,useEffect } from "react";
import BAInput from "../component/BAInput";
import Paper from '@mui/material/Paper';
import { fbAdd,fbGet } from '../config/firebasemethods';
import { isFunctionOrConstructorTypeNode } from 'typescript';
import Logo from '../assets/hammad.jpg'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



// My js Logics
var questions = [
  {
  question:"Html Stands For _______________________",
  options: ["Hyper Text Makeup Language",
  "html",
  "Case Cading Style Sheet",
  "Hypertext markup language"
  ],
  correctAns: "Hypertext markup language",
},
{
  question:"Css Stands For _______________________",
  options: [
  "Casecading Style Sheet",
  "Java",
  "Ram",
  "Hypertext markup language"
],
  correctAns: "Casecading Style Sheet",
},
{
  question:"Js Stands For _______________________",
  options: [
    "Java Style",
    "Java Script",
    "Script",
    "Script Src"
  ],
  correctAns: "Java Script",
},
  {
  question:"Dom Stands For _______________________",
  options: [
  "Document Object Model",
  "html",
  "Css",
  "Java"
],
  correctAns: "Document Object Model",
},
{
  question:"Ram Stands For _______________________",
  options: [
  "Read Only Memory",
  "Dom",
  "Random Acccess Memory",
  "For Pc"
  ],
  correctAns: "Random Acccess Memory",
  },
  {
  question:"Rom Stands For _______________________",
  options: [
    "Hyper Text Markup Language",  
    "html",
    "HTml",
  "Read Only Memory"
  ],
  correctAns: "Read Only Memory",
  },
  ];




const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function Admin(props: Props) {
  
  
  const Save = () => {
    
  }
  const logout = () => {
    
  }



  const [quizmodel,setquizmodel] = useState<any>({}) 
  const [questionmodel,setquestionmodel] = useState<any>({})
  const [option,setoption] = useState("")
  const [allquiz,setallquiz] = useState<any>([]) 
  const [questions,setquestion] = useState<any>([]) 
  const [optionlist,setoptionlist] = useState([])
  const [lock,setlock] = useState(false)
  const [currectoption,setcorrectoption] = useState<any>()



  const [text,setText] = useState<any>("")
  const [list, setList] = useState<any>([]);
  
  
  const navigate = useNavigate(); 
  const Unlock = () => {
    setlock(!lock);
}

const addoptions = () => {
  if (!text){
    
  }else{
    list.push(text);
    setList([...list]);
  }
}




  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>

    <img className='adminimage' src={Logo} alt="Admin Image" />

      <List sx={{marginTop:'80px',background:'Black',color:"white" ,fontweight:"900"}}>
        {['HTML', 'CSS', 'JS QUIZ 1', 'JS QUIZ 2'].map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>



    </div>
  );
  
  const container = window !== undefined ? () => window().document.body : undefined;

  // My logics
  const fillModel = (key:string, val:any) => {
    quizmodel[key] = val;
    setquizmodel({ ...quizmodel });

  };


 
  const checkdata=()=>{
  console.log(quizmodel);
  fbAdd('quiz',quizmodel).then((res)=>{
    console.log(res)
  
}).catch((err)=>{
  console.log(err)
})


  }

const getQuiz=()=>{
    console.log(quizmodel);
    fbGet('quiz').then((res:any)=>{
      console.log(res)
      setallquiz([...res])
  }).catch((err)=>{
    console.log(err)
  })



  
    }

    useEffect(()=>{
      getQuiz()
      },[])
      


  // tsx Return 


  return (
    <Box sx={{ display: 'flex',}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background:"black"
        }}
      >
        <Toolbar>
      
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color:"White"  }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Quiz App Admin
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, }}
        aria-label="mailbox folders"
      
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, background:"Black" },

           

          }}
        >
          {drawer}
          <div className='ml-10 mt-16 logout'>
        <BAButton onClick={addoptions} label="Log Out" />
      </div>
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, background:"Black" },
           

          }}
          open
        >
          {drawer}
          <div className='ml-10 mt-16 logout'>
        <BAButton onClick={addoptions} label="Log Out" />
      </div>
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Box sx={{float:"right"}}>
        <BAButton  onClick={getQuiz} label="Save Quiz" />

        </Box>

       
        <Box sx={{ width: 1, marginTop:"50px" }}>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Box gridColumn="span 4">
            <BAInput
              disabled={lock}
              value={questionmodel.quizName}
              onChange={(e:any) => fillModel("quizName",e.target.value)
            
            }
              label="Quiz Name"
            />
            </Box>
            <Box gridColumn="span 4">
            <BAInput
             disabled={lock}
              value={questionmodel.QuizDuration}
              onChange={(e:any) => fillModel("QuizDuration",e.target.value)
            
            }
              label="Quiz Duration"
            />
            </Box>
            <Box gridColumn="span 4">
            <BAInput
             disabled={lock}
              value={questionmodel.Key}
              onChange={(e:any) => fillModel("Key",e.target.value)
            
            }
              label="Secret Key"
            />
            </Box>
          </Box>


          <Box sx={{ marginTop: "25px" }} display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>

            <Box gridColumn="span 3">
              <Item sx={{ height: "50px" }}><Button  variant="contained" color="success"></Button>Quiz Open</Item>
            </Box>
            <Box gridColumn="span 9">
              <BAInput
               disabled={lock}
              value={questionmodel.description}
              onChange={(e:any) => fillModel("description",e.target.value)
            
            }
              label="Description"
            />
            </Box>
          </Box>
        </Box>


        <Box sx={{marginTop:"20px"}}>
          <BAButton onClick={Unlock} label='Lock Quiz' />
        </Box>


        <Box sx={{ marginTop: "50px" }} display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
          <Box gridColumn="span 12">
          
             <BAInput
              value={questionmodel.question}
              onChange={(e:any) => fillModel("question",e.target.value)
            
            }
              label="Question"
            />
          </Box>
         

        </Box>
        <Box sx={{ marginTop: "50px" }} display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
          <Box gridColumn="span 8">
          <BAInput
              value={questionmodel.Options}
              onChange={(e:any) => setText(e.target.value)
            
            }
              label="Options"
            />
    
          </Box>
          <Box gridColumn="span 4">
            <BAButton onClick={addoptions} label='Add Options' />

          </Box>

        </Box>

        <Box sx={{ marginTop: "30px" }} display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
          <Box gridColumn="span 3">
          
           
              {list.map((x:any, i:any) => (
              <>
                <Box sx={{marginTop:"30px", float:"left"}} >
              
                  <Button sx={{marginLeft:"10px"}} variant="contained" color="success" key={i}>{x}</Button>

                </Box>
              </>
            ))};
          </Box>  
        </Box>
        <Box sx={{ marginTop: "30px" }} display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
          <Box gridColumn="span 3">


          </Box>
         



        </Box>



      </Box>
    </Box>
  );
}