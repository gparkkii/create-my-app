export const PasswordError = {
  required: '비밀번호를 확인해주세요.',
  minLength: '비밀번호를 8글자 이상 입력해주세요.',
  checkLower: '비밀번호에 소문자를 포함해주세요.',
  checkUpper: '비밀번호에 대문자를 포함해주세요.',
  checkNumber: '비밀번호에 숫자를 포함해주세요.',
  checkSpec: '비밀번호에 특수문자를 포함해주세요.',
  checkValidate: '비밀번호가 일치하지 않습니다.',
};

export const PasswordConfirmError = {
  required: '비밀번호를 다시 입력해주세요.',
  validate: '비밀번호가 일치하지 않습니다.',
};

export const EmailError = {
  required: '이메일을 입력해주세요.',
  pattern: '이메일 형식이 옳바르지 않습니다.',
};

export const NameError = {
  required: '이름을 입력해주세요.',
  minLength: '이름을 2글자 이상 작성해주세요.',
  maxLength: '이름을 12글자 이내로 작성해주세요.',
};

export const NickNameError = {
  required: '닉네임을 입력해주세요.',
  minLength: '닉네임을 2글자 이상 작성해주세요.',
  maxLength: '닉네임을 12글자 이내로 작성해주세요.',
};

export const DescriptionError = {
  required: '자기소개를 입력해주세요.',
  maxLength: '자기소개를 100글자 이내로 작성해주세요.',
};

export const UrlError = {
  pattern: 'url 형식이 옳바르지 않습니다.',
};
