class PasswordPolicy {

    constructor() {
     return this
    }

    getPassword() { return this.getPassword() }
    setPassword(password) {
        this.password = password
        // 특수문자 미포함
        this.SPECIAL_CHARACTERS = 'IW_01'
        // 연속된 문자 방지 (3자)
        this.CONSECUTIVE_NUMBERS = 'IW_02'

        return this
    }

    getWordNumber() { return this.wordNumber }
    setWordNumber(number) {
        this.wordNumber = number
        return this
    }

    setIncluedWord(typeArray) {
        console.log(typeArray)
        return this;
    }

    build() {
        if(!this.getPassword()) {
            return { state: false, msg: '패스워드가 등록되지 않았습니다.' }
        }

        return null;
    }


}

export default PasswordPolicy