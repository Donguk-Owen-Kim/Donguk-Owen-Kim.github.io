import ProjectDetail from './ProjectDetail';
import { type Metadata } from 'next';

// ✅ 타입 인터페이스 명시
interface Props {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' }
  ];
}

// ✅ props 타입 명시적으로 지정
export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  return <ProjectDetail projectId={id} />;
}
