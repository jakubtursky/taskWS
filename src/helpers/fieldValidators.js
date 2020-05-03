export function isPhoneNumber(value) {
  return /^[0-9]{3} ?[0-9]{3} ?[0-9]{3}$/.test(value)
}

export function containsMultipleEmails(value) {
  return /^[\W]*([\w+\-.%]+@[\w\-.]+\.[A-Za-z]{2,4}[\W]*,{1}[\W]*)*([\w+\-.%]+@[\w\-.]+\.[A-Za-z]{2,4})[\W]*$/.test(
    value,
  )
}

export function containsUppercase(value) {
  return /[A-Z]/.test(value)
}

export function containsLowercase(value) {
  return /[a-z]/.test(value)
}

export function containsNumber(value) {
  return /[0-9]/.test(value)
}
