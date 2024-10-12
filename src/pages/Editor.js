import React, { useState, useRef, useEffect } from 'react';
import { toast } from 'react-toastify';
import ACTIONS from '../Action';
import Client from '../components/Client';
import Edit from '../components/Edit';
import { initSocket } from '../socket';
import { Navigate, useLocation, useNavigate , useParams} from 'react-router-dom';


const Editor = () => {
  const socketRef=useRef(null);
  const location=useLocation();
  const {roomId}=useParams();
  const reactNavigator=useNavigate();
  useEffect(()=>{
    const init=async()=>{
      socketRef.current=await initSocket();
      // socketRef.current.on('connect_error',(err)=>handleErrors(err));
      // socketRef.current.on('connect_failed',(err)=>handleErrors(err));

      // function handleErrors(e){
      //   console.log('socket error',e);
      //   toast.error('Socket connection failed,try again later');
      //   reactNavigator('/');
      // }

      // socketRef.current.emit(ACTIONS.JOIN,{
      //   roomId,
      //   username: location.state?.username,
      // });
    };
    init();
  },[]);
  const [clients,setClients]= useState([
    {socketId:1 , username:'Diya'},
    {socketId:2 , username:'Riya'},
    {socketId:3 , username:'Priya'},
    {socketId:4 , username:'Shreya'},
  ]);

  if(!location.state){
    return <Navigate to="/"/>;
  }

  return (
    <div className='mainWrap'>
      <div className='aside'>
        <div className='asideInner'>
          <div className='logo'>
          <img className='homeLogo' src='/logo.png' alt='logo-png'/>
          </div>
          <h3>Connected</h3>
          <div className='clientsList'>
            {
              clients.map((client)=>(
                <Client key={client.socketId} username={client.username}/>
              ))
            }
          </div>
        </div>
        <button className='btn CopyBtn'>Copy ROOM</button>
        <button className='btn leaveBtn'>Leave ROOM</button>
      </div>
      <div className='editorWrap'>
        <Edit/>
      </div>
    </div>

  );
 
}

export default Editor;