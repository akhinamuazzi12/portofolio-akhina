import { useEffect, useState } from 'react'
import DataImage from './data';
import {listTools, listProyek} from "./data";
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [alamat, setAlamat] = useState('');
  const [nim, setNim] = useState('');
  const [prodi, setProdi] = useState('');
  const [notelpon, setNotelpon] = useState('');
  const [komen, setKomen] = useState('');

  const [userEdit, setUserEdit] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL;
  useEffect(()=>{
getAllData();
  },[]);


  async function fetchData() {
    try {
      let res =await fetch(`${API_URL}/person`)
      let data = await res.json()
      SetData(data)

      console.log(data)
    } catch (erorr){
      console.log(erorr)
    }
    
  }

  useEffect(()=>{
    fetchData()
  },[])

  // display data
  async function getAllData(){
    const response = await axios.get(API_URL);
    setUsers(response.data);
    console.log(response.data);
  }

  //tambah data

  async function addData(e){
    e.preventDefault();
    if (!name || !email || !alamat || !nim || !prodi || !notelpon || !komen){
      return;
    }

    const response = await axios.post(API_URL,{name, email, alamat, nim, prodi, notelpon, komen});
    setName('');
    setEmail('');
    setAlamat('');
    setNim('');
    setProdi('');
    setNotelpon('');
    setKomen('');
    getAllData();
    
  }

  // edit data

  function editData(data){
    setUserEdit(data);
    setName(data.name);
    setEmail(data.email);
    setAlamat(data.alamat);
    setNim(data.nim);
    setProdi(data.prodi);
    setNotelpon(data.notelpon);
    setKomen(data.komen);
  }

  // update data

  async function updateData(e){
    e.preventDefault();
    if (!name || !email || !alamat || !nim || !prodi || !notelpon || !komen){
      return;
    }

    const response = await axios.put(API_URL+"/"+userEdit.id,{name, email, alamat, nim, prodi, notelpon, komen});
    setName('');
    setEmail('');
    setAlamat('');
    setNim('');
    setProdi('');
    setNotelpon('');
    setKomen('');
    getAllData();
    setUserEdit(null);
    
  }

  // handleclick

  async function handleClick(e){
    e.preventDefault();
    if(userEdit){
      await updateData(e);
    }else{
      await addData(e);
    }

  }

  //delete data
  async function deleteData(id) {
    const response = await axios.delete(API_URL+"/"+id);
    getAllData();
  }



  return (
    <>
    <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
      <div className='animate__animated animate__fadeInUp animate__delay-3s'>
        <div className='flex items-center gap-3 mb-6 bg-blue-700 w-fit p-4 rounded-2xl'>
          <img src={DataImage.HeroImage} alt="Hero Image" className='w-20 rounded-md' loading='lazy'/>
          <q className='font-semibold'>Usahamu bukanlah suatu yang sia-sia, melainkan suatu harapan yang belum terlaksana</q>
        </div>
        <h1 className='text-5xl/tight font-bold mb-6'>Halo, Saya Akhyina Muazzi</h1>
        <p className='mb-6 opacity-80'>
          Nama saya Akhyina Muazzi, seorang mahasiswa di STMIK Utama Purwokerto. 
          Saya memiliki minat besar di bidang teknologi informasi, khususnya dalam dunia pemrograman. 
          Ketertarikan saya pada coding muncul sejak saya mulai memahami bagaimana 
          baris-baris kode bisa menciptakan sesuatu yang nyata dan bermanfaat — seperti aplikasi, 
          website, atau bahkan game edukasi.
          Bagi saya, pemrograman bukan hanya soal menulis kode, tapi 
          juga soal memecahkan masalah, berpikir logis, dan menciptakan 
          solusi digital yang bisa digunakan banyak orang.
          </p>
          <div className='flex items-center sm:gap-4 gap-2'>

            <a href="assets/cv.pdf" download className='bg-green-900 p-4 rounded-2xl hover:bg-green-800' >
              Download CV 
              <i className="ri-download-line ri-lg"></i></a> <i></i>
            <a href="#proyek" className='bg-yellow-700 p-4 rounded-2xl hover:bg-yellow-600'>Lihat Proyek
              <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
      </div>
      <img src={DataImage.HeroImage} alt="Hero Image" className='w-[500px] md:ml-auto 
      animate__animated animate__fadeInUp animate__delay-4s' loading='lazy'/>
    </div>

    {/* tentang */}
     <div className="tentang mt-32 py-10" id='tentang'>
      <h1 className='text-center text-4xl font-bold mb-2' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">About Me</h1>
      <p className='text-base/loose text-center opacity-50' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Berikut ini beberapa perkenalan dari saya</p>
      <div className='xl:w-2/3 lg:2-3/4 w-full mx-auto p-7 bg-blue-700 rounded-lg mt-5'
      data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
      <img src={DataImage.HeroImage} alt="Image" className='w-12 rounded-md mb-10 sm:hidden' loading='lazy'/>
        <p className='text-base/loose mb-10'>
          Halo, perkenalkan nama saya Akhyina Muazzi. Saya adalah mahasiswa dari STMIK Utama Purwokerto, sebuah institusi pendidikan tinggi yang fokus pada bidang teknologi dan informatika. Sejak saya mengenal dunia komputer, saya merasa sangat tertarik pada bagaimana sesuatu yang tidak terlihat — seperti baris kode atau sketsa desain — bisa diubah menjadi aplikasi, website, atau sistem digital yang bermanfaat.
Minat saya terhadap dunia pemrograman mulai tumbuh ketika pertama kali saya mencoba membuat program sederhana di bangku sekolah. Dari sana saya mulai mempelajari berbagai bahasa pemrograman seperti HTML, CSS, JavaScript, dan sedikit demi sedikit saya juga mengeksplorasi Node.js dan React untuk mengembangkan website interaktif. Saya senang ketika melihat program yang saya buat bisa berjalan dengan baik, karena itu seperti melihat ide dalam kepala saya menjadi kenyataan yang bisa dilihat dan digunakan oleh orang lain.
Namun selain pemrograman, saya juga memiliki ketertarikan besar terhadap desain. Saya percaya bahwa tampilan visual adalah kesan pertama yang menentukan apakah seseorang akan tertarik pada sebuah aplikasi atau website. Karena itu, saya mulai belajar tentang UI/UX Design, prinsip desain visual, serta menggunakan tools seperti Figma, Canva, dan kadang juga Photoshop untuk membuat desain antarmuka yang menarik dan mudah digunakan.
Kombinasi antara logika dalam pemrograman dan kreativitas dalam desain adalah sesuatu yang sangat saya nikmati. Saat saya menulis kode, saya merasa seperti sedang menyusun struktur bangunan yang kuat. Namun ketika saya merancang tampilan, saya seperti sedang memberi warna, bentuk, dan keindahan pada bangunan tersebut agar nyaman digunakan dan sedap dipandang.
Tujuan saya ke depan adalah menjadi seorang developer yang tidak hanya bisa membuat sistem yang berfungsi dengan baik, tetapi juga memiliki tampilan yang profesional dan user-friendly. Saya ingin menciptakan produk digital yang tidak hanya memenuhi kebutuhan teknis, tetapi juga memberikan pengalaman yang menyenangkan bagi pengguna.
Saya percaya bahwa belajar di bidang teknologi adalah perjalanan yang tak pernah berhenti. Setiap hari selalu ada hal baru untuk dipelajari, entah itu framework terbaru, tren desain baru, atau pendekatan baru dalam menyelesaikan masalah. Dan itulah yang membuat saya semakin semangat untuk terus belajar dan berkembang di dunia pemrograman dan desain.
        </p>
        <div className='flex items-center gap-8'>
          <img src={DataImage.HeroImage} alt="Image" className='w-30 rounded-md sm:block hidden' loading='lazy'/>
          <div className='flex items-center gap-5'>
            <div>
              <h1 className='text-4xl text-black mb-1'>
                25<span className='text-yellow-600 font-bold'>+</span></h1>
              <p className='opacity-70'>Proyek Selesai</p>
            </div>
             <div>
              <h1 className='text-4xl text-black mb-1'>
                3<span className='text-yellow-600 font-bold'>+</span></h1>
              <p className='opacity-70'>Tahun Pengalaman</p>
            </div>
          </div>
        </div>
      </div>

      <div className='tools mt-32'>
        <h1 className='text-4xl/snug font-bold mb-4' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Tools yang digunakan</h1>
        <p className='xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
        Berikut ini beberapa Tools yang saya gunakan untuk membuat sebuah Pemrogram maupun Desain </p>

        <div className='tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>

          {listTools.map((tool) => (
            <div className='flex items-center gap-2 p-3 border-blue-600 rounded-md hover:bg-blue-800 group'
            key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true">
            <img src={tool.gambar} alt="Tools Image" className='w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900' loading='lazy'/>
            <div>
                  <h4 className='font-bold'>{tool.nama}</h4>
                  <p className='opacity-50'>{tool.ket}</p>  
            </div>
          </div>
          ))}


          
        </div>
      </div>
</div>
{/* tentang */}


{/* Proyek */}
<div className="proyek mt-32 py-10" id='proyek'>
  <h1 className='text-center text-4xl font-bold mb-2' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Project</h1>
  <p className='text-base/loose text-center opacity-50' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Berikut ini beberapa project pemrograman yang telah saya buat</p>
  <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
    {listProyek.map((proyek) => (
      <div key={proyek.id} className='p-4 bg-zinc-800 rounded-md' data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad} data-aos-once="true">
        <img src={proyek.gambar} alt="Proyek Image" loading='lazy'/>
        <div>
          <h1 className='text-2xl font-bold my-4 '>{proyek.nama}</h1>
          <p className='text-base/loose mb-4'>{proyek.desk}</p>
          <div className='flex flex-wrap gap-2'>
            {proyek.tools.map((tool, index) => (
              <p className='py-1 px-3 border border-zinc-500 bg-blue-600 rounded-md font-semibold' key={index}>{tool}</p>
            ))}
          </div>
          <div className='mt-8 text-center'>
            <a href="#" className='bg-zinc-700 p-3 rounded-lg block border border-zinc-600 hover:bg-zinc-600'>lihat website</a>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
{/* Proyek */}

{/* Kontak */}

<div className="kontak mt-32 sm:p-10 p-0" id='kontak'> 
  <h1 className='text-4xl mb-2 font-bold text-center' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Contact</h1>
  <p className='text-base/loose text-center mb-10 opacity-50' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Silahkan kirim-kirim pesan ke saya</p>
  <form action="https://formsubmit.co/akhyinamuazzi@gmail" method="POST"
   className='bg-fuchsia-900 p-10 sm:w-fit w-full mx-auto rounded-md' autoComplete='off' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true"> 
    <div className='flex flex-col gap-6'>
       <div className='flex flex-col gap-2'>
      <label className='font-semibold'>Nama Lengkap</label>
      <input type="text" name='nama' placeholder='Masukan Nama...' className='border border-cyan-300 p-2 rounded-md' required/>
    </div>
    
    <div className='flex flex-col gap-2'>
      <label className='font-semibold ' >Email</label>
      <input type="email" name='email' placeholder='Masukan Email...' className='border border-cyan-300 p-2 rounded-md' required/>
    </div>
    
    <div className='flex flex-col gap-2'>
      <label htmlFor='pesan' className='font-semibold'>Pesan</label>
      <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder='Pesan...' className='border border-cyan-300 p-2 rounded-md' required></textarea>
    </div>
    <div className='text-center'>
      <button type='submit' className='bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-blue-600'>Kirim Pesan</button>
    </div>
    </div>
   

  </form>
</div>

{/* Kontak */}

{/* DataBase*/}
<div className="database mt-32 py-10" id='database'>
      <div className='tools mt-32'>
        <h1 className='text-5xl/snug font-bold mb-4' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Data Base Pengunjung Website</h1>
        <p className='xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
        Halo guys, terimakasih sudah mau berkunjung ke website saya. Silahkan kalau berkenan bisa bantu isi data diri anda dan masukan komentar buat website ya...</p>
        </div>

   <div className='flex flex-col gap-2 mt-10'>
<h3 className='text-4xl text-center font-bold mb-2' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" id='database1'>{userEdit? 'Edit Pengunjung' : 'Tambah Pengunjung'}</h3>
        <form className='bg-fuchsia-900 p-10 sm:w-fit w-full mx-auto rounded-md' autoComplete='off' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true" type='submit' onSubmit={handleClick}>
         
         <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-2'>
            <input type="text" name='nama' placeholder='Nama...' className='border border-white-800 p-2 rounded-md' value={name} onChange={(e)=>
              setName(e.target.value)
            } required/>
          </div>
          
          <div className='flex flex-col gap-2'>
            <input type="email" name='email' placeholder='Email...' className='border border-white-800 p-2 rounded-md' value={email} onChange={(e)=>
              setEmail(e.target.value)} required/>
          </div>

           <div className='flex flex-col gap-2'>
            <input type="text" name='alamat' placeholder='Alamat...' className='border border-white-800 p-2 rounded-md' value={alamat} onChange={(e)=>
              setAlamat(e.target.value)} required/>
          </div>

           <div className='flex flex-col gap-2'>
            <input type="text" name='nim' placeholder='NIM...' className='border border-white-800 p-2 rounded-md' value={nim} onChange={(e)=>
              setNim(e.target.value)} required/>
          </div>

           <div className='flex flex-col gap-2'>
            <input type="text" name='prodi' placeholder='Prodi...' className='border border-white-800 p-2 rounded-md' value={prodi} onChange={(e)=>
              setProdi(e.target.value)} required/>
          </div>

          
           <div className='flex flex-col gap-2'>
            <input type="text" name='notelpon' placeholder='No Telpon...' className='border border-white-800 p-2 rounded-md' value={notelpon} onChange={(e)=>
              setNotelpon(e.target.value)} required/>
          </div>

          <div className='flex flex-col gap-2'> 
          <label htmlFor='komen' className='font-semibold'>Komentar</label>
          <textarea name="komen" id="komen" cols="45" rows="7" placeholder='Silahkan Masukan Komentar Anda...' className='border border-zinc-500 p-2 rounded-md' value={komen} onChange={(e)=>
              setKomen(e.target.value)} required></textarea>
         </div>

        <div className='text-center'>
            <button type='submit' className='tet-2xl bg-blue-500 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-blue-700'>{userEdit?'Update Data':'Save Data'}</button>
          </div>
          </div>
          </form>
          </div>

<br />
<br />
<br />
      <div className='data-pengguna text-3xl font-bold mb-2' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
      <h3>Data Pengunjung Website</h3>
</div>
      <div className="proyek-box mt-5 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
         <ul>
            {
              users.map((user)=>(
              <li>
              <div className='flex flex-wrap gap-2 mt-10'>
                <div className='py-1 px-3 border border-zinc-500 bg-green-600 rounded-md font-semibold'>
                  {user.name}
                  </div>
                  </div>
              <div className='flex flex-col gap-6'>
                <div> 
                {user.email}&nbsp;&nbsp;&nbsp;
                {user.alamat}&nbsp;&nbsp;&nbsp;
                {user.nim}&nbsp;&nbsp;&nbsp;
                {user.prodi}&nbsp;&nbsp;&nbsp;
                {user.notelpon}&nbsp;&nbsp;&nbsp;
                </div>
                </div>

                <div className='border border-zinc-500 bg-zinc-600 py-1 px-3 rounded-md mt-2'>
                {user.komen}
                </div>
                
              
              <div className='flex items-center sm:gap-4 gap-2 mt-2'>
                <a href='#database1' className='edit bg-yellow-500 p-3 rounded-lg block border border-cyan-400 hover:bg-yellow-400' onClick={()=>editData(user)}>Edit</a>
                <i></i>
                  <a href='#database1' className='delete bg-red-700 p-3 rounded-lg block border border-red-600 hover:bg-red-600' onClick={()=>deleteData(user.id)}>Delete</a>
                </div>  
                
              
            </li>
              ))
            }

          </ul>
      </div>
         
      </div>

    
   
        
{/* DataBase*/}

    </>
  )
}

export default App
