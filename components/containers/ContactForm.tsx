import { LegacyRef, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { settings } from '@/settings/settings';
import { useTranslation } from 'next-i18next';

const ContactForm = () => {
  const { t } = useTranslation('common');
  const currentForm = useRef<HTMLFormElement | null | undefined>(null);

  const [serverSuccess, setServerSuccess] = useState<boolean | string>('');
  const [serverError, setServerError] = useState<boolean | string>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    emailjs
      .sendForm(
        settings.emailjs_serviceid,
        settings.emailjs_templateid,
        currentForm.current as HTMLFormElement,
        settings.emailjs_publickey,
      )
      .then(
        (result) => {
          if (result.status === 200 && result.text) {
            setServerError(false);
            setServerSuccess(t('emailSuccessfullySent'));
          }
        },
        (error: Error) => {
          setServerSuccess(false);
          setServerError(t('somethingIsWrongWhileSendingTheMessage'));
          console.error('error:' + error.message);
        },
      );
  };

  return (
    <form
      ref={currentForm as LegacyRef<HTMLFormElement>}
      className="card -mt-1.5  space-y-4 p-4 md:p-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="inputbox">
        <label htmlFor="name">{t('name')}</label>
        <input
          type="text"
          placeholder={t('enterYourName')}
          id="name"
          {...register('name', { required: true })}
        />
        {errors.name && (
          <>
            {errors.name.type === 'required' && (
              <p className="bg-red-500 bg-opacity-5 text-center text-sm text-red-500">
                {t('nameIsRequired')}
              </p>
            )}
          </>
        )}
      </div>
      <div className="inputbox">
        <label htmlFor="email">{t('email')}</label>
        <input
          type="email"
          placeholder={t('enterYourEmail')}
          id="email"
          {...register('email', {
            required: true,
            pattern: /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,
          })}
        />
        {errors.email && (
          <>
            {errors.email.type === 'required' && (
              <p className="bg-red-500 bg-opacity-5 text-center text-sm text-red-500">
                {t('emailIsRequired')}
              </p>
            )}
            {errors.email.type === 'pattern' && (
              <p className="bg-red-500 bg-opacity-5 text-center text-sm text-red-500">
                {t('invalidEmailAddress')}
              </p>
            )}
          </>
        )}
      </div>
      <div className="inputbox">
        <label htmlFor="subject">{t('subject')}</label>
        <input
          type="text"
          placeholder={t('enterSubject')}
          id="subject"
          {...register('subject', { required: true })}
        />
        {errors.subject && (
          <>
            {errors.subject.type === 'required' && (
              <p className="bg-red-500 bg-opacity-5 text-center text-sm text-red-500">
                {t('subjectIsRequired')}
              </p>
            )}
          </>
        )}
      </div>
      <div className="inputbox">
        <label htmlFor="message">{t('message')}</label>
        <textarea
          placeholder={t('enterYouMessage')}
          cols={1}
          rows={5}
          id="message"
          {...register('message', { required: true })}
        />
        {errors.message && (
          <>
            {errors.message.type === 'required' && (
              <p className="bg-red-500 bg-opacity-5 text-center text-sm text-red-500">
                {t('messageIsRequired')}
              </p>
            )}
          </>
        )}
      </div>
      {!serverSuccess && serverError && (
        <p className="bg-red-500 bg-opacity-5 text-center text-sm text-red-500">
          {serverError}
        </p>
      )}
      {!serverError && serverSuccess && (
        <p className="bg-green-500 bg-opacity-5 text-center text-sm text-green-500">
          {serverSuccess}
        </p>
      )}
      <button type="submit" className="btn">
        <span>{t('sendMail')}</span>
      </button>
    </form>
  );
};

export default ContactForm;
