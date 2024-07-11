import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__blocks'>

        <div> 
          <div className='footer_bloks__all'>
            <h2 className='footer__h2'>Gratis Ongkir</h2>
            <p>Setiap pembelian diatas Rp 500.000</p>
          </div> 
          <div className='footer__lingfirst__block'>
            <div className='footer__lingfirst__block__second'>
              <h2>Dukungan</h2>
              <ul>FAQ</ul>
              <ul>Peneyelesaian masalah</ul>
              <ul>Tempat pusat perbaikan</ul>
            </div>
          </div>
        </div>
        
        <div>
          <div className='footer_bloks__all'>
            <h2 className='footer__h2'>Bisa Bayar di Tempat</h2>
            <p>Maksimal pembelian Rp 8.000.000</p>
          </div>
          <div className='footer__lingfirst__block'>
            <div className='footer__lingfirst__block__second'>
              <h2>Tentang</h2>
              <ul>Brand Kami</ul>
              <ul>Ruang Redaksi</ul>
              <ul>Toko</ul>
            </div>
          </div>
        </div>
        
        <div>
          <div className='footer_bloks__all'>
            <h2>Produk Originial</h2>
            <p>Garansi 100% Produk dan kualitas original</p>
          </div>
          <div className='footer__lingfirst__block'>
            <div className='footer__lingfirst__block__second'>
              <h2>Hubungi Kami</h2>
              <ul>service.id@realme.com</ul>
              <div className='footer__social__icons'>
                <AiFillInstagram className='footer__social__icons__second1'/>
                <AiOutlineFacebook className='footer__social__icons__second'/>
                <AiOutlineTwitter className='footer__social__icons__second' />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className='footer_bloks__all'>
            <h2>Cicilian Tanpa Kartu Kredit</h2>
            <p>Dapatkan melalui aplikasi BRI Ceri</p>
          </div>
          <div className='footer__logo__second'>
            <div className="footer__logo">
              <Link to={'/'} className='link__decoration'><p className='footer__logo_img'>realme</p></Link>
              <p className='footer__logo__comment'>"Realme - Menghubngkan Impain, Mengubah Hidup"</p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
