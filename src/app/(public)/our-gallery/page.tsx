"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const categories: string[] = ["Sewage Treatment Plant", "Internship Program", "Pongal Celebration"];

const images: Record<string, string[]> = {
  "Sewage Treatment Plant": [
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiZS3zWx6KwnggKQcOIcCpfxSjNxm3b9zsyAbGJE5M_xFyNY-VCq9A3BJVrZGkFNKvrK5CNfoeaeA4NEUlXl7-3HnvymksB1nK7B-4dIcuXu9yxU0o2WWeOd9PPxhot5wcpcf0SE8hgXwYBpPxVAFTeXUdEjOa8-Vxw0ZmhtNIQPj1MFroAS89gA8v6JB7S/w480-h640/sewage-1.jpeg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiM_yJMHVsmD_zR7j7Qxzn3R3GwBBrbv4Xf0U1KGOQ_9vJZUbqlFX0pDPbdObVqp3Q0RMQCS-K_FxI9AV_6m0X3ZG1vFMnV8xCVkLGiW8Zmg1gRjLTjFBL8HRMLGVLgNExkBAPZmzqGG8OYmxtZ7I3qVsJA_tAjBMEWqKv17xF2ANrc2B-5_8CJV3V95Z9h/w480-h640/sewage-2.jpeg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXNFtJc7q0z22TXr_AA3UV5399fjqWlpq-WeAhwKsIswF-BogDb4D_Tm_U2VKE0IEEv7TC3MLDmh-mHa-qeKWPDDxHReaQYYudQmwTtPKlZd7O24OWm0Sf8L3SyHXOcHcoVFumRuwZV14aybinncYUnCCOg9ZExSRlFPNt8-9vCdJCico8TGm6pU56heZP/w480-h640/sewage-3.jpeg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWUriILEH3QYtYOcuvHNiWutMxyKXXKrNrjp2YvVmjf0hJcdQAtZew3bfpEUDTwCGoJdZ3DGgLm0d_XnfAet_A2U2CcXpvBASZtxVgadRaIEc7_kAB9Lkz1WOt5-ptLDyOPWRjewZOw10ggOzT2quKDYocqN2tOiAjMqS5T2TMEu-oDJY-E6oeCtk5fQUV/w480-h640/sewage-4.jpeg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjI1SBV297Y5tV8DpJo8LKwmm7QXcg5Sby_C1SekvHGFfdI3v984trc7-YaRlEpC_Y0hD8SmRbwFxAtuTa49QwAT9s5FLmvivwmmeiRhupTLFynQqHgtfHsH-o4t2QW0uqzoZ8er6yHwPFjP2cQDiaqTdHKLIiC70yFsmyVbJpi6iWSmR-rboUePch3kbVy/w640-h480/sewage-5.jpeg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj8YeyQAdXFjZ-jzeD0PqPw3ds4TfvcMpgXE4rsci_ndrrN6q9J4KbcczMUUPoqFDYu2J-nqK4K1MeHcMG-6YurXGBZnZUFAhP_JtNgH0eaj1oM8bIenS1GLzMAMDiqvKIMnHBmz-qhDVh9cR3X8wUm4y6dqTCkwErP8z9dzO-bwBKKeA2wH3CGiD7je44T/w360-h640/sewage-6.jpeg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEimwMjAmvKKeVSiZyuRfh45-tIvFWouiAwoMy8Z-xufwPVjsrbb667Wploltw2oHbVjrxLzg8__gEva3hdwDTBrR7Pn5FG2IzQYYaI9giogK3AG2qRjcINGzRWEFXmeAG-eW8GKQIAdAwbGVroJ03mGfWjMYq4xvxgi-TPrZqxDppzpJ5KRMLisujVGy448/w288-h640/sewage-7.jpeg"
  ],
  "Internship Program": [
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTizYE5yusnf6VNvJaYpHK3kyPWWo2R9nRiM6yLdw6lJhAUjlx-uRw29XWzcqnbHcS4rUq4ZAvmyf1Ad5Ng_mDQD5nELKPej8jjSRMd_xuSAZqDMNYbGii5Mh6PAgweUZzo7kknFDsusfqrWdJetDX6RNr9cB0RrOO2eZTEmv2Lbt4XbKJofpsqpXgrYop/s16000/internship-1.jpeg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_A1uYwvnReqqx71NYoMIKwY_KvpghMmuoWlIOK2S4yv2h8dskRynX0s5Ii_66Oz7z_537DOfxAjOKv_DhTNSnM_sSUfnpz99CHHgi6H3QSGpB-70J6ZHHuzTBMBJ9yNShhaHgpCX8B9zc7FIZZF0EUKwPRKVNxg7fMC1Y08l3-QAmRUXycxk5xA1jQ-np/s16000/internship-2.jpeg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi1CRJYvzbJaTvop3mvXxDKbOHRs9KMAgMAF3xBb-Dq98jRIxsQU4lq_FEhriC2DQ-AJ0O6Bs-KXolNxija1bwxoHCk1fZf4Hi0UZ0gRVbOU8YbuPI1TgiwHnGEqkGEUOvidO4bv9vGtT5X-wlav-i_9195At6s-ECXh8yulJ8Mu9LBWPUth6_ITQZIpkSA/s16000/internship-3.jpeg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgSpQnj_jmlPh2KHrSQBE34KIJlGIsdUNqLxYl7HMnQFfau09_Qrs4n-JJUP1gYZpt9EoLeTml0IMadqsR5gtqUzjArsTu0UeBjlQdFxEJWGVChrdaIzdI9XoWa6R1ESwHd0Z-Dym-jDaKZXycdsvG-huoINfa7V8G1k506QStUcVZePdoVUZGJ4x1aV05E/s16000/internship-4.jpeg",
  ],
  "Pongal Celebration": [
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEipSBAgCLrnaR5ALoYN8Iad112jW2R0QKtFYWKMj8Q2jOiaoWhVmMt74PFa2qlAxXALtMb5ZC6sm1zTYo9LmIh3ZejQl5aMgsjmg9FfgzHLZc3BzKJYHXccqQm1Xdhjwvw7gDPaeOSYJNAclCWKzicYPVUhu9QdrHcgflaMgoaxyIoJX0rqDLe2dKdmA-2c/s16000/pongal%20celebration-1.jpeg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgoLOQo2-g_J3dUtZQl9daGdPZnief5pp4eopVabkiympvuyk0z6ItjoARPHx0cKBwaWgzSf8JevRtJBGwcdhGGm_JHX33_4mQHIYUOeDTDHHpI0V3DT4Bdr5Sc5az-n6Whfp1ZrTqYojdWT_i9MXJr8HAO2VBPWCjQu6pueO9AVk_mvzB8M6hDc1oJIP0M/s16000/pongal%20celebration-2.jpeg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiZIBUVhai17TIiCyBpXlM9E0Mba9sH4pVQz1KIyAPExkuya4N8R0s1ueq6oW_FOuxLpurJleyO5giY5Zp_KUbEj5RLXp3cJRiuOKC7WoJKxR5z0fgFUk6qg1wvzi_McxUvit3a05qhma4ikYrURf8oIfh_kqfvi6CbFh8r_uXU-a3anK5ikjIlrhYJE6sU/s16000/pongal%20celebration-3.jpeg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhrMuMwqFt2UQTbb-bVFGKdF1A8hl6ePtW-dP9jmuMcYkJlwr1ASG3_MfBrJ15JRE3TjcMqOe9U22nj5c-ERIturLbdVfVhr8pWPNmtU-H2lWg5NL5E_sOwVWqLaL7fpql7buwp41h1tHMcAypAzJ0GSJXcV6MsvLqkIUZeVNQrRbEVpHxl205UpcV8657x/s16000/pongal%20celebration-4.jpeg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgaEII5AqKfnuBwN6lQ765RqZETx721ATnSCZZa3kaxnnpLX1XYcxYWRWxl4kQCiUAaeJ2vCbllUVKwTPU8E6XodIhm3Yb_Zj8KiK138xs4_hsJLe-CpGS_i3iL1QkLq4mMjr1_W5e0E3ybc_N3qRfLv9Du8IoNH_vfn7KXN7QPLBU3J3gVXz2YzQgWhpra/s16000/pongal%20celebration-5.jpeg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgDTejxZjCy5EECf1hx5Tf8HjQwBftrns2dBiPy5DXfyLPcx5ANLkpyntHzmdjEES6WrB_VnL6BqwhcX0tEOzlV2y-gR8COAbmmIml-PkSJOiyH3gt_c3XKuMKQ12BVxbmx2zlPPhvjR6H33Ykw5NqgHtNXM6JTymimASzo0FvSEXTrE693vKuLlSEpDh3Q/s16000/pongal%20celebration-6.jpeg",
  ],
};

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800">
        Our Gallery
      </h1>

      {/* Category Tabs with Horizontal Scrolling */}
      <div className="w-full overflow-x-auto">
        <div className="flex space-x-4 my-6 px-4 py-2 w-max">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-semibold transition ${activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-gray-300 text-gray-700"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      {/* Image Grid */}
      <div className="w-full flex flex-row justify-center mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:max-w-7xl md:grid-cols-3 gap-4">
          {images[activeCategory].map((src: string, index: number) => (
            <motion.div
              key={index}
              className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg"
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImage(src)}
            >
              <Image
                src={src}
                alt="Gallery Image"
                width={300}
                height={200}
                className="object-cover w-full h-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <Image
              src={selectedImage}
              alt="Expanded Image"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </motion.div>
        </div>
      )}
    </div>
  );
}
