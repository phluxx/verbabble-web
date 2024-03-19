<template>
  <div class="home">
    <div class="join-content" style="background: linear-gradient(to bottom, #00FFFF, #008080);">
      <img src="https://f005.backblazeb2.com/file/verbabble/fulllogo_transparent_nobuffer.png" alt="Verbabble Logo" class="logo" />
      <h1>Join Verbabble!</h1>
    <form @submit.prevent="submitForm" ref="form" class="enrollment-form">
      <label for="username">Username:</label><br>
      <input type="text" id="username" v-model="formData.username" @input="validateUsername" required><br>
      <p v-if="usernameError" class="error-message">{{ usernameError }}</p>
      <label for="password">Password:</label><br>
      <input type="password" id="password" v-model="formData.password" @input="validatePassword" required><br>
      <p v-if="passwordError" class="error-message">{{ passwordError }}</p>
      <label for="password_repeat">Verify Password:</label><br>
      <input type="password" id="password_repeat" v-model="formData.password_repeat" @input="validatePasswordRepeat" required><br>
      <p v-if="passwordRepeatError" class="error-message">{{ passwordRepeatError }}</p>
      <label for="email">Email:</label><br>
      <input type="email" id="email" v-model="formData.email" @input="validateEmail" required><br>
      <p v-if="emailError" class="error-message">{{ emailError }}</p>
      <button type="submit">Submit</button>
    </form>
    <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        username: '',
        password: '',
        password_repeat: '',
        email: ''
      },
      usernameError: '',
      passwordError: '',
      passwordRepeatError: '',
      emailError: '',
      message: ''
    };
  },
  methods: {
    validateUsername() {
      this.usernameError = /^[a-zA-Z][a-zA-Z0-9_-]{0,31}$/.test(this.formData.username) ? '' : 'Usernames must begin with a letter, and can only contain letters, numbers, and the special characters: -_^';
    },
    validatePassword() {
      this.passwordError = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-_^$&+,:;=?@#|'<>.^*()%!]).{12,}$/.test(this.formData.password) ? '' : 'Password must be at least 12 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character';
    },
    validatePasswordRepeat() {
      this.passwordRepeatError = this.formData.password === this.formData.password_repeat ? '' : 'Passwords do not match';
    },
    validateEmail() {
      this.emailError = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.formData.email) ? '' : 'Invalid email address';
    },
    submitForm() {
      if (this.usernameError || this.passwordError || this.passwordRepeatError || this.emailError) {
        return;
      }

      fetch('https://auth.verbabble.com/api/v3/flows/executor/verbabbler-enrollment/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.formData.username,
          password: this.formData.password,
          password_repeat: this.formData.password_repeat,
          email: this.formData.email
        })
      })
      .then(response => {
        if (response.ok) {
          this.formData.username = '';
          this.formData.password = '';
          this.formData.password_repeat = '';
          this.formData.email = '';
          this.message = 'Your submission was successful. Please check your email.';
        } else {
          this.message = 'Something went wrong. Please contact support@verbabble.com for assistance.';
        }
      })
      .catch(() => {
        this.message = 'Something went wrong. Please try again later.';
      });
    }
  }
};

</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.join-content {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
}

.join-content a {
  color: rgba(59, 0, 64, 255);
  text-decoration: none;
}

.join-content a:hover {
  text-decoration: underline;
}

.logo {
  max-width: 200px;
  height: auto;
  margin-bottom: 20px;
}

.content {
  max-width: 800px;
  padding: 20px;
  align-items: center;
  text-align: center;
}

.rounded-button {
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 10px;
}

.sign-up {
  background-color: rgba(245, 69, 255, 1);
  color: white;
}

.chat-now {
  background-color: rgba(59, 0, 64, 1);
  color: white;
}

.enrollment-form input {
  border-radius: 10px;
  padding: 5px;
  margin-bottom: 10px;
}

.enrollment-form label {
  display: block;
}

.enrollment-form button {
  background-color: rgba(245, 69, 255, 255);
  color: white;
  font-weight: bold;
  border: none;
  padding: 10px 20px;
  border-radius: 50px;
  cursor: pointer;
}

.enrollment-form button:hover {
  background-color: rgba(168, 48, 221, 255);
}

@media (max-width: 768px) {
  .logo {
    width: 80%;
  }
}
</style>

