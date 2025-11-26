
import Image from 'next/image';

export default function Logo({className}: {className?: string}) {
    return <Image className={className} src="/logo.png" alt="Octet Systems Logo" width={24} height={24} />
}
