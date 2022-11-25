import React, { useEffect, useState } from 'react'

import Header from '../components/Header'
import PostCard from '../components/PostCard'
import { SideCardHome } from '../components/SideCard'
import UserList from '../components/UserList'

import { Container, Content, ButtonModalCreate, ModalBackground, ModalHeader, Modal, CloseModalIcon, Input, InputField, TitleIcon, InputGroup, DescriptionIcon, UploadIcon, PostButton, ButtonUploadFile } from '../styles/pages/feed'



import { api } from '../config/Axios'
import { PostInterface } from '../utils/feed/PostCardInterface'
import { CreatePost } from '../services/feed/createPost'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { storage } from '../libs/firebase.conf'

const Feed: React.FC = () => {
  
  const [posts, setPosts] = useState<PostInterface[]>([])
  const [active, setActive] = useState<boolean>(false)

  const toggleMenu = () => {
    if (active === true) setActive(false)
    else setActive(true)
  }

  const modalEvents = (e) => {
    if(e.target.id == 'modalBg' || e.target.id == 'closeModal'){
      toggleMenu()
    }
  }

  const handleFocusInput = (id: string): void => {
    document.getElementById(id)?.focus()
  }
  
  const handleClickInput = (id: string): void => {
    document.getElementById(id)?.click()
  }

 
  
  const [postId, setPostId] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [area, setArea] = useState<string>('')
  const [file, setFile] = useState<File>()
  const [imgURL, setImageURL] = useState<string>()
  
  const handleSubmitForm = async () => {

    const date = new Date()
    const dateTime = date.toDateString() + " " + date.getHours()  + " " + date.getMinutes() + " " + date.getSeconds()
    const currentUserId = JSON.parse(localStorage.getItem('loggedUserId') || `{}`)  

    if (!file) return
    
    const storageRef = ref( storage, `images/${new Date().getTime() + '_' + file.name}` )
    
    await uploadBytesResumable(storageRef, file).then(() => {
      getDownloadURL(storageRef).then(function (url) {
        setImageURL(url)
      })
    })
    const postData: PostInterface = {
      dateTime: dateTime,
      image: imgURL,
      user: {
        id: currentUserId,
        name: '',
        lastName: '',
        username: '',
        profileImage: ''
      },
      title,
      description,
      area
    }
    CreatePost(postData)
  }

  useEffect(() => {
    api.get('posts').then((posts) => setPosts(posts.data))
  }, [])

  return (
    <>
      {active ? (
        <ModalBackground id="modalBg" onClick={modalEvents}>
          <Modal id='modal'>
            <ModalHeader>
              Criar Novo Post <span><CloseModalIcon id='closeModal'/> </span>
            </ModalHeader>
            <InputGroup>

              <InputField>
                <TitleIcon onClick={() => handleFocusInput('title')}/>
                <Input id='title' value={title} placeholder='Título' onChange={e => setTitle(e.target.value)}/>
              </InputField>

              <InputField>
                <DescriptionIcon onClick={() => handleFocusInput('description')}/>
                <Input id='description' value={description} placeholder='Description' onChange={e => setDescription(e.target.value)}/>
              </InputField>

              <InputField>
                <ButtonUploadFile onClick={() => handleClickInput('uploadPostImage')}>
                  { file ? file.name : "Faça o download de uma foto"}
                  <UploadIcon />
                </ButtonUploadFile>

                <Input 
                  id='uploadPostImage'
                  onChange={(e) => {                    
                    setFile(e?.target?.files[0])
                  }}
                  placeholder='Faço o upload de um arquivo' 
                  type={'file'} 
                  accept={"image/*"}  
                  style={{display:"none"}}/>

              </InputField>
              <div style={{display: "flex", alignItems:"flex-start", justifyContent: "space-between", width: "80%", height: "12%"}}>
                <select style={{overflowY: "scroll", fontSize: ".8em"}} onChange={e => setArea(e.target.value)}>
                  <option value="">Escolha a Área</option>
                  <option value="MTM">Matemática</option>
                  <option value="NAT">Natureza</option>
                  <option value="LIN">Linguagens</option>
                  <option value="HUM">Humanas</option>
                  <option value="TEC">Técnico</option>
                </select>
                <PostButton onClick={async () => await handleSubmitForm()}>Postar</PostButton>
              </div>
            </InputGroup>
          </Modal>
        </ModalBackground>
      ) : null}
      
      <Header headerType="General" />
      <Container>
        <SideCardHome />
        <Content className="content">
          <ButtonModalCreate onClick={toggleMenu}>
            Criar Novo Post
          </ButtonModalCreate>
          {posts.map((post) => {            
            return (
              <PostCard
                key={post.id}
                post={post}
                user={post.user}
              />
            )
          })}
        </Content>
        <UserList />
      </Container>
    </>
  )
}

export default Feed
