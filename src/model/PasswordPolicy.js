class PasswordPolicy {

    constructor() {
        this.password = null
        // default
        this.wordNumber = 10
        this.WORD_NUMBER = 'IW_01'
        // 특수문자 미포함
        this.SPECIAL_CHARACTERS = 'SpecialChar'
        // 연속된 문자 방지 (3자)
        this.CONSECUTIVE_NUMBERS = 'ConsecutiveNumbers'
        this.enablePolicies = []
        return this
    }

    getPassword() { return this.password }
    setPassword(password) {
        this.password = password
        return this
    }

    getWordNumber() { return this.wordNumber }
    setWordNumber(number) {
        this.wordNumber = number
        return this
    }

    enableSpecialChar() {
        this.enablePolicies.push(this.SPECIAL_CHARACTERS)
        return this
    }

    enableConsecutiveNumbers() {
        this.enablePolicies.push(this.CONSECUTIVE_NUMBERS)
        return this
    }

    isSpecialChar() {
        const value = this.getPassword();
        let regexp =  /[~!@#$%^&*()_+|<>?:{}]/
        for (let i = 0; i<value.length; i++) {
            if(regexp.test(value[i])) { return { state: true, msg: '' } }
        }

        return { state: false, msg: '특수문자가 존재하지 않습니다.' }
    }

    isConsecutiveNumbers() {
        // 연속문자 일단 미구현
    }



    valid(value) {
        this.setPassword(value)
        if(!this.getPassword()) {
            return { state: false, msg: '패스워드가 등록되지 않았습니다.' }
        } else if(this.getPassword().length < this.getWordNumber()) {
            return { state: false, msg: '패스워드는 '+this.getWordNumber()+'자 이상 입력해주세요.' }
        } else {
            return { state: true, msg: ''}
        }
    }
}

export default PasswordPolicy