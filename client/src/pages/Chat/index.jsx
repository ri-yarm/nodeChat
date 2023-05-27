import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:3000');

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const { search } = useLocation();
  const [params, setParams] = useState(null);

  // вызывается при входе в чат
  useEffect(() => {
    const searchParams = Object.fromEntries(new URLSearchParams(search));
    console.log(searchParams);
    setParams(searchParams);
    socket.emit('join', searchParams);
  }, [search]);

  // содаёт связь с сокетом под ивентом message
  useEffect(() => {
    socket.on('message', ({data}) => {
      console.log(data)
      
      // Новые сообщения сохраняем, не удаляя старые
      setMessages((state) => ([...state, data]))
    })
  }, [])

  return 'cgat';
};

export default Chat;

