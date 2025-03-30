import Link from "next/link"
import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900/70 py-12 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-bold mb-6">Support Our Project</h2>
          <p className="text-gray-300 max-w-2xl mb-8">
            Help ACC students drive innovation forward by supporting our electric vehicle project. Your contribution
            will help us continue developing autonomous driving technology and provide valuable learning experiences for
            students.
          </p>
          <Link
            href="https://www.gofundme.com/f/help-acc-students-drive-innovation-forward"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gradient-to-r from-pink-500 to-red-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 flex items-center gap-2"
          >
            <Heart className="w-5 h-5" /> Donate Now
          </Link>

          <div className="mt-12 pt-8 border-t border-gray-800 w-full text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Switch Labs EV Project. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

