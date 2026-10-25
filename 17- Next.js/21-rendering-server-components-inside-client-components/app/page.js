import Modal from './Modal' // Client Component
import Cart from './Cart' // Server Component

export default function Page() {
  return (
    <Modal>
      <Cart /> {/*  Server Component ko children ke roop mein pass */}
    </Modal>
  )
}
