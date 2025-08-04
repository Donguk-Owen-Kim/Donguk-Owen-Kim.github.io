import ProjectDetail from './ProjectDetail';
import { type Metadata } from 'next';

// ✅ 타입 인터페이스 명시
interface Props {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
  ];
}

// ✅ props 타입 명시적으로 지정
export default function ProjectPage({ params }: Props) {
  return <ProjectDetail projectId={params.id} />;
}