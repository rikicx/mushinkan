import { permanentRedirect } from "next/navigation";

export default function LegacyArticleExamplePage() {
  permanentRedirect("/conteudos/o-que-e-o-karate");
}
