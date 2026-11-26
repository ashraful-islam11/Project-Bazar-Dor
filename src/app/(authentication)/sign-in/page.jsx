"use client";

import { AiFillGithub } from "react-icons/ai";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import React, { Suspense, useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "@/app/lib/auth-client";

const SignInContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (searchParams.get("message") === "unauthorized") {
      toast.info("অনুগ্রহ করে সাইন ইন করুন", { toastId: "unauthorized" });
      router.replace("/sign-in");
    }
  }, [searchParams, router]);

  const handleSignIn = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const { data: resData, error } = await signIn.email({
      email: userData.email,
      password: userData.password,
    });

    if (resData) {
      toast.success("সফলভাবে সাইন ইন সম্পন্ন হয়েছে");
      window.location.replace("/");
    }
    if (error) {
      toast.error(error.message || "সাইন ইন সম্পন্ন হয় নি");
    }
  };

  const handleGoogleSignIn = async () => {
   const res =   await signIn.social({
      provider: "google",
      callbackURL: "/",
     
    });

    if(res){
      toast.success('সফলভাবে সাইন ইন সম্পন্ন হয়েছে')
    }
    
  };

  const handleGithubSignIn = async () => {
     const res = await signIn.social({
      provider: "github",
      callbackURL: "/",
    });
    if(res){
      toast.success('সফলভাবে সাইন ইন সম্পন্ন হয়েছে')
    }
  };

  return (
    <div className="max-w-120 mx-auto my-10 px-2">
      <div className="text-center my-4">
        <h2 className="font-bold text-2xl">সাইন ইন</h2>
        <p className="text-neutral-500">
          বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
        </p>
      </div>

      <div className="border border-gray-200 bg-white rounded-2xl px-2 min-[380px]:px-5 py-2">
        <form onSubmit={handleSignIn}>
          <fieldset className="fieldset bg-white rounded-box">
            <label className="label">ইমেইল</label>
            <input
              name="email"
              type="email"
              className="input w-full"
              placeholder="you@example.com"
              required
            />

            <label className="label">পাসওয়ার্ড</label>
            <input
              name="password"
              type="password"
              className="input w-full"
              placeholder="কমপক্ষে ৮ অক্ষর"
              required
            />

            <button type="submit" className="btn bg-green-600 text-white mt-4 cursor-pointer">
              সাইন ইন
            </button>
          </fieldset>
        </form>

        <div>
          <div className="grid grid-cols-12 items-center my-2">
            <div className="col-span-5 border-t border-gray-200"></div>
            <span className="col-span-2 text-center">অথবা</span>
            <div className="col-span-5 border-t border-gray-200"></div>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="flex-1 flex items-center justify-center border border-gray-200 rounded-xl px-3 py-1.5 gap-1 cursor-pointer"
            >
              <FcGoogle />
              <span>Google দিয়ে চালিয়ে যান</span>
            </button>

            <button
              type="button"
              onClick={handleGithubSignIn}
              className="flex-1 flex items-center justify-center border border-gray-200 rounded-xl px-3 py-1.5 gap-1 cursor-pointer"
            >
              <AiFillGithub />
              <span>GitHub দিয়ে চালিয়ে যান</span>
            </button>
          </div>

          <div className="flex items-center justify-center my-3">
            <span className="font-bold">
              অ্যাকাউন্ট নেই?{" "}
              <Link href="/sing-up" className="text-green-500">
                সাইন আপ করুন
              </Link>
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center my-5">
        <Link href="/" className="flex items-center gap-1">
          <FaArrowLeftLong />
          <span className="text-neutral-400">হোম পেজে ফিরে যান</span>
        </Link>
      </div>
    </div>
  );
};

const SignInPage = () => {
  return (
    <Suspense
      fallback={
        <div className="max-w-120 mx-auto my-10 px-2 text-center text-neutral-500">
          লোড হচ্ছে...
        </div>
      }
    >
      <SignInContent />
    </Suspense>
  );
};

export default SignInPage;