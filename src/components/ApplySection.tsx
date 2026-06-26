import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function ApplySection({ className }: { className?: string }) {
  return (
    <section
      id="apply"
      className={cn('text-center bg-transparent', className)}
      style={{ margin: '54px 0px 0px' }}
    >
      {/* Step label */}
      <div
        style={{
          fontSize: '20px',
          fontWeight: 800,
          color: '#15171a',
          margin: '0px 0px 2px',
        }}
      >
        Step 2
      </div>

      {/* Heading */}
      <h2
        style={{
          fontSize: '36px',
          fontWeight: 800,
          lineHeight: '40.32px',
          letterSpacing: '-0.792px',
          color: '#15171a',
          marginBottom: 0,
        }}
      >
        Apply For{' '}
        <span
          style={{
            color: '#1b9e45',
            textDecoration: 'underline',
            textDecorationColor: '#25c75a',
            textDecorationThickness: '4px',
            textUnderlineOffset: '2px',
            fontWeight: 700,
          }}
        >
          PIF
        </span>{' '}
        Below
      </h2>

      {/* Typeform placeholder card */}
      <div
        className="mx-auto px-4 sm:px-0"
        style={{
          maxWidth: '720px',
          marginTop: '26px',
          marginBottom: '18px',
          height: '661px',
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          boxShadow: '0px 2px 10px 0px rgba(18, 20, 23, 0.06)',
          border: '1px solid #e5e7eb',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Form mockup */}
        <div className="flex flex-col items-center gap-2 px-8 w-full max-w-[400px]">
          <span
            style={{
              fontSize: '22px',
              fontWeight: 700,
              color: '#15171a',
              marginBottom: '16px',
            }}
          >
            Application Form
          </span>

          {/* Mock input fields */}
          <div
            className="w-full rounded-lg"
            style={{
              height: '48px',
              backgroundColor: '#f3f4f6',
              border: '1px solid #e5e7eb',
            }}
          />
          <div
            className="w-full rounded-lg"
            style={{
              height: '48px',
              backgroundColor: '#f3f4f6',
              border: '1px solid #e5e7eb',
            }}
          />
          <div
            className="w-full rounded-lg"
            style={{
              height: '48px',
              backgroundColor: '#f3f4f6',
              border: '1px solid #e5e7eb',
            }}
          />
          <div
            className="w-full rounded-lg"
            style={{
              height: '48px',
              backgroundColor: '#f3f4f6',
              border: '1px solid #e5e7eb',
            }}
          />

          {/* Mock submit button */}
          <div
            className="w-full rounded-lg mt-2 flex items-center justify-center"
            style={{
              height: '48px',
              backgroundColor: '#1b9e45',
            }}
          >
            <span style={{ fontSize: '16px', fontWeight: 600, color: '#ffffff' }}>
              Submit Application
            </span>
          </div>
        </div>
      </div>

      {/* Avatars row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '7px',
          fontSize: '12.5px',
          fontWeight: 700,
          color: 'rgba(21, 23, 26, 0.66)',
          margin: '16px 0px 8px',
        }}
      >
        <Image
          src="/images/reps-trained.webp"
          alt="Students placed on offers"
          width={0}
          height={62}
          unoptimized
          style={{ height: '62px', width: 'auto' }}
        />
        <span>100+ Sales Reps Trained And Placed On Offers</span>
      </div>
    </section>
  );
}
