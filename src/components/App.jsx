import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Component} from 'react';
import css from './App.module.css';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import {fetchSearchedImages, imageValues} from './services/api';
import Modal from './Modal/Modal';
import { InfinitySpin } from 'react-loader-spinner'

export class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    isLoading: false,
    error: null,
    currentPage: 1,
    showModal: false,
    largeImageURL: '',
    tags: '',
  }

 async componentDidUpdate(prevProps, prevState) {
    const prevSearch = prevState.searchQuery;
    const nextSearch = this.state.searchQuery;
    const prevCurrentPage = prevState.currentPage;
    const currentPage = this.state.currentPage;
   if(prevSearch !== nextSearch || prevCurrentPage !== currentPage) {
    
    try {
      this.setState({isLoading: true, error: null});
      const {hits, totalHits} = await fetchSearchedImages(nextSearch, currentPage);
       console.log(this.state.images);
      if(totalHits === 0) {
        toast.warn('Unfortunately, we didnt find any pictures. Please, try another query');
      }
      
      const newImages = imageValues(hits);
      this.setState(({ images }) => ({
        images: [...images, ...newImages],
        totalHits,
      }));
    } catch(error) {
      this.setState({
        error: 'Ooops, something went wrong. Please reload page',
      })
    } finally {
      this.setState({isLoading: false});
    }   
 }
} 

  handleFormSubmit = searchQuery => {
    this.setState({searchQuery})  
  }

  onLoadMore = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
    console.log(this.state.currentPage)
  }
  
  toggleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal,
    })
    )
  }

  openModal = (largeImageURL, tags) => {
   this.toggleModal();
   this.setState({
    largeImageURL,
    tags,
  })
  }

  render () {
    const {isLoading, images, error, largeImageURL, showModal,tags} = this.state;
    
    return (
      <div className={css.container}>
        <SearchBar onSubmit={this.handleFormSubmit}/>
        {isLoading &&
          <InfinitySpin width='200' color="#008080"/>}
        {images &&
          <ImageGallery images={images} openModal={this.openModal}/>}
        {images.length !== 0 && 
          <Button text="Load more" onClick={this.onLoadMore}/>} 
        {showModal && 
          <Modal imageUrl={largeImageURL} tags={tags} onClickModal={this.toggleModal}/>}
        {error && 
          <p>{error.message}</p>}
        <ToastContainer />
      </div>
    );
    }
}
