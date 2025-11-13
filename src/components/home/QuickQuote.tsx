import Input from '../../components/ui/Input'
import Select from '../../components/ui/Select'
import Button from '../../components/ui/Button'
import { Card, CardBody } from '../../components/ui/Card'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function QuickQuote() {
  const [product, setProduct] = useState('auto')
  const [zip, setZip] = useState('')
  const [start, setStart] = useState('')
  const navigate = useNavigate()

  const go = () => {
    if (!product) return
    navigate(`/products/${product}?zip=${encodeURIComponent(zip)}&start=${encodeURIComponent(start)}`)
  }

  return (
    <Card className="shadow-card">
      <CardBody>
        <h3 className="font-semibold text-lg">Quick quote</h3>
        <p className="text-slate-600 text-sm mt-1">Answer a few basics to see your price.</p>

        <div className="mt-5 grid gap-4">
          <label className="block">
            <span className="text-sm">Product</span>
            <Select className="mt-1" value={product} onChange={e => setProduct(e.target.value)}>
              <option value="auto">Auto Insurance</option>
              <option value="home">Home Contents</option>
              <option value="liability">Personal Liability</option>
              <option value="pet">Pet Insurance</option>
            </Select>
          </label>

          <label className="block">
            <span className="text-sm">ZIP / City</span>
            <Input className="mt-1" placeholder="e.g., 10115 Berlin" value={zip} onChange={e => setZip(e.target.value)} />
          </label>

          <label className="block">
            <span className="text-sm">Start Date</span>
            <Input type="date" className="mt-1" value={start} onChange={e => setStart(e.target.value)} />
          </label>

          <Button onClick={go} full className="mt-2">See my quote</Button>

          <p className="text-xs text-slate-500">
            By continuing, you agree to our Terms and acknowledge our Privacy Policy.
          </p>
        </div>
      </CardBody>
    </Card>
  )
}
