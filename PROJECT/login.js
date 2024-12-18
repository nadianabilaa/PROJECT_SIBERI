// Menangani form Sign Up
document.getElementById('signupForm').addEventListener('submit', async function (event) {
  event.preventDefault();
  const email = document.getElementById('signup-email').value;
  const firstName = document.getElementById('signup-first-name').value;
  const lastName = document.getElementById('signup-last-name').value;
  const password = document.getElementById('signup-password').value;

  // Validasi email harus menggunakan domain @gmail.com
  if (!email.endsWith('@gmail.com')) {
      alert('Hanya email dengan domain @gmail.com yang diperbolehkan.');
      return;
  }

  try {
      // Kirim data ke server untuk disimpan ke database
      const response = await fetch('/auth/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, firstName, lastName, password }),
      });

      const result = await response.json();
      if (response.ok) {
          alert('Sign up berhasil! Anda akan diarahkan ke halaman utama.');
          window.location.href = './index.html'; // Redirect ke halaman utama
      } else {
          alert(`Sign up gagal: ${result.message}`);
      }
  } catch (error) {
      console.error('Error during Sign Up:', error);
      alert('Terjadi kesalahan saat Sign Up.');
  }
});

// Menangani form Sign In
document.getElementById('signinForm').addEventListener('submit', async function (event) {
  event.preventDefault();
  const email = document.getElementById('signin-email').value;
  const password = document.getElementById('signin-password').value;

  try {
      // Kirim data ke server untuk validasi login
      const response = await fetch('/auth/signin', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
      });

      const result = await response.json();
      if (response.ok) {
          alert(`Login berhasil! Selamat datang, ${result.name}.`);
          window.location.href = 'index.html'; // Redirect ke halaman profil
      } else {
          alert(`Login gagal: ${result.message}`);
      }
  } catch (error) {
      console.error('Error during Sign In:', error);
      alert('Terjadi kesalahan saat Sign In.');
  }
});
