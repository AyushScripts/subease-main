'use client'

import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CalendarIcon } from 'lucide-react'
import { format } from 'date-fns'
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { IoIosAdd } from 'react-icons/io'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'


type SubscriptionFormData = {
  name: string
  category: string
  price: number
  currency: string
  renewalDate: Date
  billingCycle: string
  notes: string
}

export default function AddSubscriptionButton() {
  const [isOpen, setIsOpen] = useState(false)
  const { register, handleSubmit, formState: { errors }, setValue, watch, control } = useForm<SubscriptionFormData>()

  const onSubmit = (data: SubscriptionFormData) => {
    console.log(data)
    setIsOpen(false)
  }

  const renewalDate = watch('renewalDate')

  const addSubscription = useMutation(api.Subscriptions.addSubscription);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="default" className='w-full bg-primary text-primary-foreground flex justify-center gap-2'>
            <IoIosAdd className='text-base' />
            Add Subscription
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Subscription</DialogTitle>
        </DialogHeader>
        <form onSubmit={(e)=> {
          e.preventDefault();
          const form = e.target as HTMLFormElement;
          const formData = new FormData(form);
          const name = formData.get('name') as string;
          const category = formData.get('category') as string;
          const price = formData.get('price') as unknown as number;
          const currency = formData.get('currency') as string;
          const renewalDate = formData.get('renewalDate') as any;
          const billingCycle = formData.get('billingCycle') as unknown as string;
          const notes = formData.get('notes') as string;
          

          addSubscription({
            name,
            category,
            price,
            currency,
            renewalDate,
            billingCycle,
            notes,
            userId: "any for now",
          })
        }} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Subscription Name</Label>
            <Input
              id="name"
              {...register('name', { required: 'Subscription name is required' })}
            />
            {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Controller
              name="category"
              control={control}
              rules={{ required: 'Category is required' }}
              render={({ field }) => (
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="entertainment">Entertainment</SelectItem>
                    <SelectItem value="productivity">Productivity</SelectItem>
                    <SelectItem value="utilities">Utilities</SelectItem>
                    <SelectItem value="others">Others</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.category && <p className="text-sm text-red-500">{errors.category.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="price">Price</Label>
            <div className="flex space-x-2">
              <div className="flex-grow">
                <Input
                  id="price"
                  type="number"
                  step="0.01"
                  {...register('price', { required: 'Price is required', min: 0 })}
                />
              </div>
              <div className="w-24">
                <Controller
                  name="currency"
                  control={control}
                  rules={{ required: 'Currency is required' }}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Currency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="INR">INR</SelectItem>
                        <SelectItem value="USD">USD</SelectItem>
                        <SelectItem value="EUR">EUR</SelectItem>
                        <SelectItem value="GBP">GBP</SelectItem>
                        <SelectItem value="JPY">JPY</SelectItem>
                        

                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
            </div>
            {errors.price && <p className="text-sm text-red-500">{errors.price.message}</p>}
            {errors.currency && <p className="text-sm text-red-500">{errors.currency.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="renewalDate">Renewal Date</Label>
            <Controller
              name="renewalDate"
              control={control}
              rules={{ required: 'Renewal date is required' }}
              render={({ field }) => (
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={`w-full justify-start text-left font-normal ${!field.value && "text-muted-foreground"}`}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={(date) => field.onChange(date)}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              )}
            />
            {errors.renewalDate && <p className="text-sm text-red-500">{errors.renewalDate.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="billingCycle">Billing Cycle</Label>
            <Controller
              name="billingCycle"
              control={control}
              rules={{ required: 'Billing cycle is required' }}
              render={({ field }) => (
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select billing cycle" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="quarterly">Quarterly</SelectItem>
                    <SelectItem value="yearly">Yearly</SelectItem>
                    <SelectItem value="custom">Custom</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.billingCycle && <p className="text-sm text-red-500">{errors.billingCycle.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Notes (Optional)</Label>
            <Textarea id="notes" {...register('notes')} />
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}