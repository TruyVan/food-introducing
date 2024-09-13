import './not-found.css'
const NotFound = ()=>{
    return (
    <div className="not-found">
        <img src="/assets/img/photos/not-found.jpg" alt="" />
        <div className="text">
            <div className='text-9xl'>404</div>
            <div className='text-4xl'>Trang bạn tìm kiếm không tồn tại.</div>
        </div>
    </div>)
}

export default NotFound;