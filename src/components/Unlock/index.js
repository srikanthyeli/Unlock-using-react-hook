// Write your code here
import {useState} from 'react'
import {
  AppContainer,
  LockContainer,
  LockImage,
  LockText,
  LockButton,
} from './styledComponents'

const Unlock = () => {
  const [isUnLock, setLockStatus] = useState(false)
  const onClickButton = () => {
    setLockStatus(prevState => !prevState)
  }
  const Image = isUnLock
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
  const content = isUnLock ? 'Your Device is Unlocked' : 'Your Device is Locked'
  const buttonText = isUnLock ? 'Lock' : 'Unlock'
  const altText = isUnLock ? 'unlock' : 'lock'

  return (
    <AppContainer>
      <LockContainer>
        <LockImage src={Image} alt={altText} />
        <LockText>{content}</LockText>
        <LockButton type="button" onClick={onClickButton}>
          {buttonText}
        </LockButton>
      </LockContainer>
    </AppContainer>
  )
}

export default Unlock
