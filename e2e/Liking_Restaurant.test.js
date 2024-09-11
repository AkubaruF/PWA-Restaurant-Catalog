Feature('Liking Restaurant')

Scenario('flow user / Scenario like dan unlike', ({ I }) => {
    // Buka halaman utama.
    I.amOnPage('/#/now-playing')

    // Pilih salah satu resto. Misalnya resto pertama.
    // Klik resto tersebut.
    I.see('Explore Restaurant', '.daftarrestoran')
    I.click('a#ateyf7m737ekfw1e867')

    // Aplikasi membawa user ke halaman detail resto
    I.see('Reviews', '.daftarrestoran')

    // Kita menekan tombol menyukai resto
    I.see('♡', '.like')
    I.click('button#likeButton')
    I.see('❤️', '.like')

    // Kita buka halaman daftar resto yang disukai
    I.amOnPage('/#/upcoming')

    // Kita melihat satu resto yang telah disukai
    I.see('Kafe Cemara', '#ateyf7m737ekfw1e867')

    // Klik resto tersebut
    I.click('a#ateyf7m737ekfw1e867')

    // Aplikasi membawa user ke halaman detail resto
    I.see('Reviews', '.daftarrestoran')

    // Kita menekan tombol batal menyukai resto
    I.see('❤️', '.like')
    I.click('button#likeButton')
    I.see('♡', '.like')

    // Kita buka halaman daftar resto yang disukai
    I.amOnPage('/#/upcoming')

    // Kita sudah tidak melihat ada resto yang disukai
    I.see('Tidak ada restaurant untuk ditampilkan', '.movie-item__not__found')
})
