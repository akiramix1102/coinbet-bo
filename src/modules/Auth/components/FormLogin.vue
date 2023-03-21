<template>
  <div class="form-login w-[512px] bg-white m-auto rounded-lg shadow-lg py-[30px] px-6">
    <p class="text-[30px] leading-[45px] font-semibold mb-5 text-center">Sign In</p>
    <el-form ref="form-login" label-position="top" class="form-item" :model="form" :rules="rules">
      <el-form-item prop="email">
        <el-input v-model="form.email" placeholder="Email" type="email" />
      </el-form-item>
      <el-form-item prop="password" class="input-password">
        <el-input
          v-model="form.password"
          class="input-password"
          :type="showPass == true ? 'text' : 'password'"
          placeholder="Password"
        >
          <template #append>
            <div class="icon-eye cursor-pointer" @click="showPass = !showPass">
              <base-icon :icon="showPass == true ? 'eye-off' : 'eye'" size="22" />
            </div>
          </template>
        </el-input>
      </el-form-item>
      <el-checkbox v-model="remember"
        ><span class="text-base" style="color: #201f1e; font-weight: 400; margin-left: -2px">
          Remember me
        </span></el-checkbox
      >
      <!-- <div v-if="urlSystem && urlSystem['api.auto.test'] !== '1'" class="captcha be-flex jc-space-center mt-2">
        <vue-recaptcha
          ref="recaptcha"
          :load-recaptcha-script="true"
          :language="language"
          :sitekey="siteKey"
          @verify="verifyCaptcha"
          @expired="expiredCaptcha"
        ></vue-recaptcha>
      </div> -->
      <base-button class="my-6"> Sign In </base-button>
    </el-form>
  </div>
</template>

<script setup lang="ts">
  import type { FormRules } from 'element-plus'

  interface IForm {
    email: string
    password: string
  }

  const form = ref<IForm>({
    email: '',
    password: ''
  })

  const rules = ref<FormRules>({
    email: [
      {
        required: true,
        message: 'Please enter your email',
        trigger: 'blur'
      },
      { type: 'email', message: 'Please enter a correct email address', trigger: 'blur' }
    ],
    password: [
      {
        required: true,
        message: 'Please enter password',
        trigger: 'blur'
      }
    ]
  })

  const showPass = ref(false)
  const remember = ref(false)
</script>

<style scoped lang="scss">
  .form-item {
    :deep(.el-input-group) {
      &:hover {
        .el-input-group__append {
          border-color: var(--color-input-hover-border);
        }
      }
      .el-input__wrapper {
        border-right: none !important;
      }
      .el-input-group__append {
        color: #a19f9d;
        background: transparent;
      }
    }
  }
</style>
