import React from 'react'

const Card = ({children}) => {
  return (
    <Card>
        <div>
            <div className="p-[3] rounded-full border-web-blue border-[0.0000000001rem] relative">
                <div className="p-3 rounded-full bg-web-blue relative">
                    <Image src={medellinCircle} alt='medellin circle' width={100} height={100} className='w-[90%] absolute left-[50%] top-[50%] animate-rotate' />
                    <Image src={medellinReferral} alt='medellin referral' width={100} height={100} className='w-5' />
                </div>
            </div>
                <h4 className="text-lg text-web-blue font-medium">Increased Referrals</h4>
            <p className={`text-[#858f9d] text-lg font-thin`}>Doctors who know your expertise in robotic surgery will refer more patients to you, expanding your network and your income.</p>
        </SubCardWrapper>
    </Card>
  )
}

export default Card