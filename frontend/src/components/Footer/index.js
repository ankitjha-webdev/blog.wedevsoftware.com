'use client'
import { Facebook, Github, Instagram, LinkedinIcon } from '@/src/Icons';
import Link from 'next/link';
import React from 'react'
import { useForm } from 'react-hook-form';


const Footer = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <footer className='mt-16 rounded-2xl bg-dark m-10 flex flex-col items-center text-light'>
            <h3 className='mt-16 font-medium text-center capitalize text-4xl px-4'>
                Interesting Stories | Updates | Guides
            </h3>
            <p className='mt-5 px-4 text-center w-3/5 font-light text-base'>
                Subscribe to learn about new technology and updates. Join over 5000+ members community to stay up to date with latest news.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className='mt-6 min-w-[384px] flex items-stretch bg-light p-2 rounded mx-4'>
                <input type="text" placeholder="enter your email  " {...register("email ", { required: true })} className='w-full bg-transparent pl-0 text-dark focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1' />

                <input type="submit" className='bg-dark text-light cursor-pointer font-medium rounded px-5 py-1' />
            </form>
            <div className='flex items-center mt-8'>
                <a href="https://www.linkedin.com/in/ankitkumarcse/" className="inline-block w-6 h-6 mr-4"><LinkedinIcon className="hover:scale-125 translate-x-all ease duration-200" /></a>
                <a href="https://www.instagram.com/we_devsoftware/" className="inline-block w-6 h-6 mr-4"><Instagram className="hover:scale-125 translate-x-all ease duration-200" /></a>
                <a href="https://www.facebook.com/wedevsoftware" className="inline-block w-6 h-6 mr-4"><Facebook className="hover:scale-125 translate-x-all ease duration-200" /></a>
                <a href="https://github.com/ankitjha-webdev" className="inline-block w-6 h-6 mr-4"><Github className="hover:scale-125 translate-x-all ease duration-200 fill-light" /></a>
            </div>
            <div className='w-full mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex flex-row items-center justify-between'>
                <span className='text-center'>&copy; © 2023 Wedevsoftware. All rights reserved.</span>
                <Link href="/sitemap.xml" className='text-center underline'>
                sitemap.xml
                </Link>
                <div className='text-center'>
                    Made wit &hearts; by <a href='https://wedevsoftware.com' className='underline'>wedevsoftware</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer